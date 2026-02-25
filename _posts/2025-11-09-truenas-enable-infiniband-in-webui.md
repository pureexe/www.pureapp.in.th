---
layout: post
title: วิธีการเปิดใช้งาน Infiniband บน TrueNAS ผ่าน WebUI โดยไม่แก้ไฟล์ระบบ
date: '2025-11-09T22:15:06.000+07:00'
author: Pakkapon Phongthawee
lang: th
tags:
- computer
thumbnail: /assets/images/thumbnail/truenas-enable-infiniband-in-webui.jpg
modified_time: 2025-11-09T22:15:06.000+07:00'
---

จาก[โพสที่แล้ว](/2025/07/enable-infiniband-in-truenas.html) เราสอนวิธีการเปิดใช้งานโดยการแก้ /etc/modules-load.d/ipoib.conf พบว่าเมื่ออัปเดตเป็น TrueNAS ล่าสุด (25.10) แล้ว Config มันหาย เมื่อทำใหม่แล้ว Interface มันไม่อัปเองทุกครั้ง ดังนั้นเราจะไปแก้ใน UI แทนเพื่อจะได้ไม่เจอปัญหาตอนอัปเดต


วิธีคือไปที่ System > Advance settings เลื่อนมาที่ Init/Shutdown Scripts แล้วใส่ 2 คำสั่งตามภาพข้างล่างได้เลย

![Init script in TrueNAS WebUI](/assets/images/post/truenas-enable-infiniband-in-webui/init_script.jpg)

โดยเราจะสั่ง Modprobe ขั้น pre-init (ก่อน จะโหลด middleware) เพราะ modprobe ใช้โหลด kernel module แล้วหลังจาก post init เราก็สั่งให้ interface up เพื่อให้พร้อมใช้งาน 

หมายเหตุ: อย่าลืมเปลี่ยน ibp7s0 ให้เป็น interface ของท่าน