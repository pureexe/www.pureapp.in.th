---
layout: post
title: เสียบสายเน็ตสองเส้นให้ BeeGFS
date: '2026-03-29T15:09:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
modified_time: '2026-03-29T15:09:00.000+07:00'
---

เพื่อเพิ่มความเร็วของเครื่อง BeeGFS server ที่มีอยู่ ตัวเรื่องมีพอร์ต SFP 25G อยู่สองพอร์ต ทำแต่เนื่องจากสวิทรองรับแค่ 10G เลยจะทำการทำ link aggregation เพื่อให้วิ่งได้สปีดมากขึั้น แต่ได้ทราบมาว่าควรตั้งเป็นหลาย ip มากกว่าเพื่อลด overhead

[ภาพ SFP 2 พอร์ต]


โดยเมื่อเสียบสาย ต้องทำการย้าย  ip จากเดิม เครื่องใช้ ip เป็น 10.1.0.230/24 ที่พอร์ต ethernet  ก็ย้ายมาเป็นพอร์ต SFP แรกใช้ 10.1.0.230/24  และพอร์ต SFP สองใช้  10.1.1.230/24 จากนั้นที่เครื่อง client ทุกตัวก็มานั่ง update ให้ interface ที่มี 10.1.0.x/24  ให้มี 10.1.1.x/24 ขึ้นมาด้วยใน nic ตัวเดียวกัน 

ตัวอย่าง netplan  ใน client ตอนนี้ จะเห็นว่า 10.1.x.23 งอกขึ้นมาเป็น 2 ตัว
 
```
network:
  ethernets:
    enp67s0:
      addresses:
      - 10.1.0.23/24
      - 10.1.1.23/24
      - 100.0.5.123/16
      optional: true
    enp68s0:
      addresses:
      - 10.204.100.123/16
      gateway4: 10.204.100.3
      nameservers:
        addresses:
        - 10.204.14.53
        search: []
    enp69s0:
      dhcp4: true
  version: 2

```

เมื่อตั้ง ip ทั้งเครื่อง server/client เสร็จแล้ว จากนั้นที่ทั้งเครื่อง server/client ให้ทำการเพิ่มไฟล์ `/etc/beegfs/beegfs-interfaces.conf` โดยข้างในมีระบุถึง 2 subnet 

```
10.1.0.0/24
10.1.1.0/24
```

จากนั้นให้ทำการแก้ config ไฟล์ตัวหลักทั้ง 4 อัน นั่นคือ

1. Management: `/etc/beegfs/beegfs-mgmtd.conf`
2. Metadata: `/etc/beegfs/beegfs-meta.conf`
3. Storage:  `/etc/beegfs/beegfs-storage.conf`
4. Client: `/etc/beegfs/beegfs-client.conf`

โดยทั้งสามไฟล์ให้เพิ่มบรรทัดนี้เข้าไป
```
connInterfacesFile = /etc/beegfs/beegfs-interfaces.conf
```

หมายเหตุ connInterfacesFile จะใช้เฉพาะเครื่องที่มีหลาย interface


แต่ว่าสิ่งที่พบคือ beegfs-mgmtd.conf ไม่มีอยู่บนเครื่องเฉยเลย เป็น แทน beegfs-mgmtd.toml 

โดยให้ทำการเพิ่มบรรทัดดังนี้แทน
```
interfaces = ["10.1.0.0/24", "10.1.1.0/24"]
```

หลังจากนั้นให้่ทำการ restart service เรียงลำดับดังนี้
1. beegfs-mgmtd
2. beegfs-meta
3. beegfs-storage
4. beegfs-client

หลังจากนั้นใช้คำสั่งนี้เพื่อตรวจเช็คการเชื่อมต่อ


หมายเหตุ แม้ว่าจ้างบนจะใช้ได้ แต่กลับพบปัญหาที่ server ไม่สามารถ mount beegfs บนเครื่องตัวเองได้ 

เลยใช้วิธีแก้โดยเปลี่ยน `/etc/beegfs/beegfs-interfaces.conf` เป็นชื่อ interface แทน และอย่าลืมใส่ lo เพื่อให้เรียกหาตัวเองได้

```
ens14f0np0
ens14f1np1
lo
```

