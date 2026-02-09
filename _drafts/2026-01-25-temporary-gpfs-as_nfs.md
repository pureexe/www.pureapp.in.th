---
layout: post
title: ทำ GPFS ที่มีอยู่ให้เป็น NFS เพื่อใช้งานชั่วคราว
date: '2026-01-25T00:09:06.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
modified_time: '2026-01-25T00:09:06.000+07:00'
---

เรื่องของเรื่องคือ HPC ที่มีอยู่ ใช้ GPFS แต่ค่า license ของ GPFS ก็สูงซะเหลือเกิน เลยจะย้ายไปใช้ระบบ opensource อย่าง BeeFS แต่ก็ยังมีส่วนที่เป็นระบบเดิมอยู่ เลยต้องหาตัวมาเชือมเป็นกาวใจใช้ไปชั่วคราว

โดยเครื่องที่เป็น Compute (GPU) เดิมใช้ CentOS7 ซึ่งไม่รองรับ BeeFS ตัวใหม่ เลยต้องลง OS ใหม่เป็น rocky แต่ถ้าลง OS ใหม่ license ที่มีอยู่จะใช้งานไม่ได้ เลยใช้วิธีว่าจะใช้เครื่องที่ยังไม่ได้ย้ายเป็น OS ใหม่จะแชร์จาก GPFS มาเป็น NFS ให้อีกที

โดยเรามีอยู่ 3 เครื่องขอเรียกว่า IO1 ถึง IO3 โดยจะใช้วิธีเป็น HA ให้ 3 เครื่องช่วยกันเป็น ip เดียว โ
```
                       +--------------------+
                       |   Floating IP      |
                       |   100.0.1.200      |
                       +---------+----------+
                                 |
        +------------------------+------------------------+
        |                        |                        |  
+---------------+         +---------------+         +---------------+
| io-node-1     |         | io-node-2     |         | io-node-3     |
| GPFS + NFS    |         | GPFS + NFS    |         | GPFS + NFS    |
| 100.0.1.201   |         | 100.0.1.202   |         | 100.0.1.203   |
+---------------+         +---------------+         +---------------+
        |                        |                        |
        +------------------------+------------------------+
                                 |
                          GPFS filesystem
```

เปิดใช้งาน nfs-server (โชคดีเครื่องลงไว้อยู่แล้ว)

```
systemctl enable nfs-server rpcbind
```


แก้ /etc/exports ทั้ง 3 io node

```
/ist *(rw,sync,no_subtree_check,no_root_squash)
/ist-project *(rw,sync,no_subtree_check,no_root_squash)
/share *(rw,sync,no_subtree_check,no_root_squash)
```

จากนั้นเริ่ม process ของ nfs-server

```
exportfs -ra
systemctl start rpcbind
systemctl start nfs-server
```

เช็คดูว่าตั้งค่าปกติ 

```
exportfs -v
```

ในไฟล์ /etc/sysconfig/nfs เพิ่ม thread เป็น 16 thread โดยเพิ่ม/ปิดคอมเม้นบรรทัด

```
RPCNFSDCOUNT=16
```

โดยบรรทัดบนจะถูกเรียกเมื่อ server ถูก restart เราสามารถเปลี่ยนจำนวน thread ของ service ปัจจุบันได้ดังนี้

```
echo 16 > /proc/fs/nfsd/threads
```

จากนั้นเราจะทำการติดตั้ง keepalived เพื่อให้เป็นตัวคอยสลับ ip กรณีที่ node ไปหวัน

ก่อนอื่นจำเป็นตั้ง Tunnel ก่อนเนื่องจากเครื่องนี้ไม่ได้ต่อเน็ตโดยตรง
```
ssh -N -D 1080 root@100.0.1.253
```
อีกหน้าต่าหนึ่ง ลง keepalive ด้วย
```
export http_proxy=socks5h://127.0.0.1:1080
export https_proxy=socks5h://127.0.0.1:1080
yum install -y keepalived
rpm -q keepalived
```
สร้าง helath check script สำหีัยตรวจว่ายังรันอยู่หรือไม่ที่ /usr/local/bin/check_nfs.sh
```
#!/bin/bash
systemctl is-active nfs-server >/dev/null 2>&1 || exit 1
exit 0
```

```
chmod +x /usr/local/bin/check_nfs.sh
```

จากนั้นมาที่เครื่องแรก ไฟล์
/etc/keepalived/keepalived.conf

ให้ใส่ config แต่บะ node 

## Node 1

```
global_defs {
    router_id io1-ib0
}

vrrp_script chk_nfs {
    script "/usr/local/bin/check_nfs.sh"
    interval 2
    weight -20
}

vrrp_instance VI_1 {
    state MASTER
    interface ib0
    virtual_router_id 51
    priority 200
    advert_int 1

    authentication {
        auth_type PASS
        auth_pass StrongPass123
    }

    unicast_src_ip 100.0.0.201
    unicast_peer {
        100.0.0.202
        100.0.0.203
    }

    virtual_ipaddress {
        100.0.0.200/16
    }

    track_script {
        chk_nfs
    }
}
```

## Node 2

```
global_defs {
    router_id io2-ib0
}

vrrp_script chk_nfs {
    script "/usr/local/bin/check_nfs.sh"
    interval 2
    weight -20
}

vrrp_instance VI_1 {
    state BACKUP
    interface ib0
    virtual_router_id 51
    priority 150
    advert_int 1

    authentication {
        auth_type PASS
        auth_pass StrongPass123
    }

    unicast_src_ip 100.0.0.202
    unicast_peer {
        100.0.0.201
        100.0.0.203
    }

    virtual_ipaddress {
        100.0.0.200/16
    }

    track_script {
        chk_nfs
    }
}
```

## Node 3
```
global_defs {
    router_id io3
}

vrrp_script chk_nfs {
    script "/usr/local/bin/check_nfs.sh"
    interval 2
    weight -20
}

vrrp_instance VI_1 {
    state BACKUP
    interface ib0
    virtual_router_id 51
    priority 100
    advert_int 1

    authentication {
        auth_type PASS
        auth_pass StrongPass123
    }

    unicast_src_ip 100.0.0.203
    unicast_peer {
        100.0.0.201
        100.0.0.202
    }

    virtual_ipaddress {
        100.0.0.200/16
    }

    track_script {
        chk_nfs
    }
}

```

ทดสอบว่า config ไม่ error 
```
 keepalived -n
 ```

 ถ้าต้างไป กด ctrl+c ได้เลยแปลว่าไม่ error

 จากนั้นให้ start ตัวสำรองก่อน แล้วค่อย start ตัวหลัก
รันทั้งสามเครื่อง

 ```
systemctl start keepalived
 ```


ป้องกัน process ค้าง

```
systemctl edit nfs-server
```

จากนั้นเติมไป 2 บรรทัด เพื่อให้ process ที่ค้างเกิน 60 วิ รีตัวเองได้

```
[Service]
TimeoutStartSec=60
TimeoutStopSec=60
```

จากนั้นมาตั้งเพิ่ม
```
io-nfs:/ist  /ist  nfs4  _netdev,hard,noatime,vers=4.1,timeo=600,retrans=5,x-systemd.automount,x-systemd.mount-timeout=90  0  0
io-nfs:/ist-project  /ist-project  nfs4  _netdev,hard,noatime,vers=4.1,timeo=600,retrans=5, x-systemd.automount,x-systemd.mount-timeout=90  0  0
io-nfs:/share  /share  nfs4  _netdev,hard,noatime,vers=4.1,timeo=600,retrans=5, x-systemd.automount,x-systemd.mount-timeout=90  0  0
```