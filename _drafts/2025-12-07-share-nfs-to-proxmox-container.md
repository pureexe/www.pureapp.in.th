---
layout: post
title: แชร์ไฟล์ให้ proxmox container จาก nfs
date: '2025-12-07T14:55:06.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
thumbnail: ""
modified_time: '2025-09-05T14:55:06.000+07:00'
---

เพิ่ม nfs share เข้าที่โฮสของ proxmox

หลังจากนั้นพยายามเพิ่มคำสั่ง

```shell
pct set 105 -mp0 /mnt/pure/sora,mp=/mnt/sora
```

แต่เมื่อพยายามเปิด proxmox แล้วเกิดอาการ error

```
Error

run_buffer: 571 Script exited with status 13

lxc_init: 845 Failed to run lxc.hook.pre-start for container "105"

__lxc_start: 2034 Failed to initialize container "105"

TASK ERROR: startup for container '105' failed
```

หลังจากงมปัญหานี้ตั้งนาน พบว่าต้นเหตุคือ /mnt/pure/sora มันไม่สามารถเขียนได้นั่นเอง 

โดย nfs ที่ตั้งไว้คือ owner จะมี uid 10013 และ gid 10014 ถึงจะเขียนได้ ดังนั้นเราจะ map ตัว root ของ container ให้มาที่ uid/gid ดังกล่าว

โดยต้องอนุญาตให้ container สามารถแมพมายัง id ของโฮส โดย /etc/subuid เพิ่มบรรทัด root:10013:1 และ /etc/subgid เพิ่ม root:10014:1 เ

จากนั้นที่ไฟล์ /etc/pve/lxc/105.conf ให้เพิ่มการ map ดังนี้

```
# Map Root UID 0 -> Host 10013
lxc.idmap: u 0 10013 1
# Map UIDs 1-65535 -> Host 100001-165535
lxc.idmap: u 1 100001 65535

# Map Root GID 0 -> Host 10014
lxc.idmap: g 0 10014 1
# Map GIDs 1-65535 -> Host 100001-165535
lxc.idmap: g 1 100001 65535
```

เมื่อ map id ตรงก็จะสามรถใช้ได้แล้ว