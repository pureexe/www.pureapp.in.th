---
layout: post
title: Slurm ส่ง job แล้วค้างขึ้นเกิดจาก uid ไม่ตรง
date: '2026-02-14T14:52:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
modified_time: '2026-02-14T14:52:00.000+07:00'
---

เนื่องจากทำการลง OS ใหม่ให้กับ compute node แล้วพยายามต่อกลับเข้า slurm controller ที่มีอยู่ ปรากฏว่าเกิดอาการค้างที่ Waiting for resource ทำให้จับต้นชนปลายไม่ถูก

วิธีที่เราจะ debug ได้ก็คือต้องทำการปิด slurm ที่รันอยู่บน compute node ก่อนโดยการสั่ง 

```
systemctl stop slurmd 
```

จากนั้นให้รัน slurm แบบให้ print log ออกมาเพื่อดูสาเหตุโดยใช้คำสั่ง

```
slurmd -Dvvv
```

จึงทำให้ได้พบกัน error ว่า

```
slurmd: error: Security violation, ping RPC from uid 4001
slurmd: error: Do you have SlurmUser configured as uid 4001?
```

พบว่า เครื่อง controller เป็น uid 4001 แต่เครื่อง compute เป็น uid 998

ดังนั้นจึงแก้โดยการลบ account แล้วสร้างใหม่

```
userdel slurm
useradd -u 4001 -r -M -s /sbin/nologin slurm
chown -R slurm:slurm /var/spool/slurm
chown -R slurm:slurm /var/log/slurm
```

แล้วทำการ restart slurmd 

```
systemctl restart slurmd
```

ปรากฏว่าเครื่องสามารถรัน job ได้แล้ว หมดไปอีก 1 ปัญหา