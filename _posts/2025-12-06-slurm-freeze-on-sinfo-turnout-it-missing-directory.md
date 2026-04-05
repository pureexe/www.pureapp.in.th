---
layout: post
title: Slurm สั่ง sinfo แล้วค้างเกิดจาก โฟลเดอร์หาย
date: '2025-12-06T14:42:06.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
thumbnail: /assets/images/thumbnail/slurm-freeze-on-sinfo-turnout-it-missing-directory.jpg
modified_time: '2025-12-06T14:42:06.000+07:00'
---

เรื่องเกิดจากเครื่อง frontend ที่รัน slurmctld โดนสั่ง restart แล้วปรากฏว่าสั่ง sinfo แล้วค้าง ตัว slurmctld ก็ไม่สามารถสามารถสั่ง start ได้  สรุปแล้ว เกิดจากเครื่องใช้ `/var` เป็น ramdisk ทำให้เมื่อสั่งรีเครื่องแล้วโฟลเดอร์ `/var/run/slurm` หายไป ดังนั้นวิธีการแก้คือสร้างโฟลเดอรร์นั้นขึ้นมาใหม่เพื่อตามคำสั่งด้านล่าง

```shell
# 1. create directory
mkdir -p /var/run/slurm

# 2. transfers ownership to slurm 
chown slurm:slurm /var/run/slurm

# 3. start service again
systemctl start slurmctld
```