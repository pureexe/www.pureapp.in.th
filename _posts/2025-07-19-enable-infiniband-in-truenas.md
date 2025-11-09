---
layout: post
title: วิธีเปิดใช้ Infiniband (IP mode) บน TrueNAS
date: '2025-07-19T13:55:06.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
thumbnail: /assets/images/thumbnail/enable-infiniband-in-truenas.jpg
modified_time: '2025-07-19T13:55:06.000+07:00'
---

เนื่องจากมีความจำเป็นจะต้องต่อ TrueNAS เข้ากับ ระบบ Infiniband วิธีหนึ่งที่ทำได้คือ เปิด Developer mode ของ TrueNAS เพื่อลง Driver ของ Infiniband แต่ว่าตัว TrueNAS (เวอร์ชั่น Enterprise) ก็รองรับ NFS-over-RDMA อยู่แล้ว แปลว่าจริงๆ แล้วมันตัว Community Edition ที่ใช้โค้ดเดียวกัน (เกือบจะทั้งหมด) อาจจะรองรับมาตั้งแต่ต้นแล้ว แต่ว่าต้องหาวิธีเปิดให้เจอ หรือไม่ก็ยอมจ่าย Enterprise ตามที่หน้าเว็บ TrueNAS ได้[ทิ้งข้อความ](https://www.truenas.com/docs/scale/scaletutorials/shares/addingnfsshares/)สำหรับเรื่องนี้ไว้ว่าเป็น Feature ของ Enterprise 

[![NFS over RDMA Enterprise Feature](/assets/images/post/enable-infiniband-in-truenas/nfs-over-rdma.jpg)](https://www.truenas.com/docs/scale/scaletutorials/shares/addingnfsshares/)

ตอนนี้ยังหาวิธีเปิดใช้งาน RDMA ไม่ได้ แต่ว่าถ้าใช้เป็น IP over Infiniband ที่น่าจะเป็นของ Enterprise เหมือนกัน สามารถเปิดใช้งานได้โดยไม่ต้องเปิด developer mode เราจะทำการเปิดใช้มันแล้วค่อยแชร์ NFS ผ่าน IP อีกทีสามารถใช้งานได้โดยใช้คำสั่ง 


```
modprobe ib_ipoib
```

แต่เราจะต้องสั่ง modprobe ทุกครั้งที่เปิดเครื่อง  เรามีหลายวิธีที่จะทำให้ตัว module โหลดตัวเองได้ วิธีหนึ่งคือการแก้ไฟล์ระบบตามที่จะเขียนอธิบายในโพสต่อไป แต่ตอนนี้เรามีวิธีที่ดีกว่าโดยการใช้ init script ผ่าน WebUI ของ TrueNAS แทน โดยสามารถอ่านรายละเอียดไว้[ที่โพสใหม่](/2025/11/truenas-enable-infiniband-in-webui.html)

ทั้งนี้เราก็ยังสามารถแก้ไฟล์ระบบให้เราสามารถทำให้ module มันโหลดตัวเองอัตโนมัติได้ด้วยคำสั่งดังนี้

```
echo ib_ipoib > /etc/modules-load.d/ipoib.conf
```

เพียงเท่านี้ก็จะมี Interface ของ Infiniband (ib) ขึ้นมาแล้ว ถ้า down อยู่ก็สั่งให้ UP อย่างของผมจะเป็นแบบนี้ (อันนี้ผมตั้ง IP ไว้ก่อนแล้ว)

![IP infinbiand](/assets/images/post/enable-infiniband-in-truenas/ip_setting.jpg)

ส่วนการตั้ง IP ให้ตั้งผ่านหน้าเว็บของ TrueNAS โดยเข้าไปที่แท็ป Network อ้อ อย่าลืมตั้ง MTU ใหญ่ๆ ล่ะ Default เป็น 1500 แต่เนื่องจากเราก็อปข้อมูลใหญ่แนะนำให้ใส่ใหญ่ที่สุด หลายๆ เว็บแนะนำให้ใส่ 8192 แต่ผมใส่ได้แค่ 4096

![TrueNAS Network](/assets/images/post/enable-infiniband-in-truenas/truenas-network-page.jpg)

ถ้าทุกอย่างเรียบร้อยดี หน้า Dashboard มันจะมี interface ของ Infiniband ขึ้นมา ความเร็ว 100GB (100000Mb/s) หรือความเร็วตามการ์ดที่ได้เลือกใส่

![TrueNAS Network](/assets/images/post/enable-infiniband-in-truenas/dashboard-ibjpg.jpg)

หลังจากนั้นก็ไปหน้า Share เราจะใช้การแชร์ผ่าน NFS ตั้งแชร์ให้เรียบร้อย

![TrueNAS share page](/assets/images/post/enable-infiniband-in-truenas/truenas-share-page.jpg)

จากนั้นไปที่เครื่องที่เราจะแชร์ให้ ตั้ง /etc/hosts ให้เรียบร้อย เช่นผมจะเพิ่มต่อท้ายไปว่า 

```
100.0.1.129 pure-nas
```

จากนั้นไปที่ /etc/fstab เพื่อตั้ง แชร์อย่างผมจะให้ mount ไปที่ /pure/t1 ก็ตั้งดังนี้ ตัวออปชั่น ด้านหลังเปลี่ยนเองได้ แต่อันนี้เป็นออปชั่นที่รองแล้วเวิร์คทื่สุด

```
pure-nas:/mnt/tank/vision /pure/t1        nfs        nfsvers=4,rw,noatime,intr,tcp,actimeo=60,nofail,x-systemd.automount,_netdev,hard,rsize=1048576,wsize=1048576  0 
```

อย่าลืมสร้างโฟลเดอร์ /pure/t1 และใช้คำสั่ง mount ด้วย

```
mkdir -p /pure/t1
mount /pure/t1
```

จากนั้นเมื่อใช้คำสั่ง df เช็คดูเราจะเห็นว่ามัน mount เรียบร้อยแล้ว เป็นอันเสร็จ

![DF command](/assets/images/post/enable-infiniband-in-truenas/command_df.jpg)


