---
layout: post
title: วิธี reservation (จอง) slurm node เพื่อแก้ไข hardware
date: '2025-12-07T14:55:06.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
modified_time: '2025-09-05T14:55:06.000+07:00'
---


ก่อนอื่นเราจะทำการ drain node เพื่อไล่งานที่อยู่ใน node ออกไปก่อน

```
scontrol update NodeName=ist-gpu-16 State=DRAIN Reason="Drain node for testing new cluster"
```

 เมื่อเราทำการ drain เพื่อไล่งานที่อยู่ใน node ออกไปแล้ว ก็ทำการตั้งการจองได้เลย

```
scontrol create reservation ReservationName=testing-new-cluster Nodes=ist-gpu-16 StartTime=now Duration=3650-00:00:00 Flags=MAINT Users=root
```