---
layout: post
title: SLURM ตั้ง low priority ด้วยระบบ preempt
date: '2025-09-05T14:55:06.000+07:00'
author: Pakkapon Phongthawee
lang: th
tags:
- คอมพิวเตอร์
thumbnail: ""
modified_time: '2025-09-05T14:55:06.000+07:00'
---

ระบบ Preempt ตั้งให้ kill job ที่มี priority ต่ำกว่าได้ ตอนแรกพยายามตั้งด้วย QoS แต่ปรากฏไม่เวิร์ค ตอนนี้เลยแก้ขัดด้วยการตั้งเป็น priority ของ parition แทน

## ข้อเสีย
เนื่องจากตอนนี้ในระบบ Slurm ที่ใช้มี MaxJobPerUser เลยเจอเคสว่า ถ้ามีคนส่งงานเข้ามาใน