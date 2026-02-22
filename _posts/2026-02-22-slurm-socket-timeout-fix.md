---
layout: post
title: Slurm - Socket timed out แก้ได้โดยการลบ StateSaveLocation
date: '2026-02-22T11:29:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
modified_time: '2026-02-22T11:29:00.000+07:00'
---
 
เนื่องจาก slurm ที่ดูแลอยู่เกิดอาการค้างไม่สามารถใช้ sinfo/squeue และคำสั่งอื่นๆ ได้ บ้างครั้งก็จะมี error ขึ้นมาว่า

```
slurm_load_jobs error: Socket timed out on send/recv operation
```

หลังจากลองมาหลายวิธี พบว่าสามารถแก้ได้ด้วยการลบ StateSaveLocation

โดยเราสามารถดู StateSaveLocation ได้โดยการใช้คำสั่ง

```
cat /etc/slurm/slurm.conf | grep StateSaveLocation
```

เราจะได้ที่อยู่ไฟล์ออกมา เช่น

```
StateSaveLocation=/ist/apps/slurm/spool/slurm/ctld
```

จะก็อปปี้เก็บไว้ก่อนก็ดี เพราะจำทำให้หลายๆ อย่างหาย เช่น job ที่รอคิวอยู่หรือ node ที่โดน drain อยู่

เมื่อทำใจได้แล้ว ให้ใช้คำสั่งลบได้เลย

```
rm -rf /ist/apps/slurm/spool/slurm/ctld/*
```

จากนั้นก็ทำการรีสตาร์ทตัว Controller 
```
systemctl restgart slurmctld
```

ตอนนี้ผ่านมา 12 ชั่วโมงแล้ว ยังไม่เกิดปัญหา หวังว่าจะหายขาดแล้วนะ