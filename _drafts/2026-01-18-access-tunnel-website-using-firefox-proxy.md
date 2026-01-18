---
layout: post
title: วิธีการเข้าเว็บไซต์ที่อยู่อยู่คนละวงแลนผ่าน Firefox บนระบบ Windows
date: '2025-01-18T15:30:06.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
modified_time: '2025-01-18T15:30:06.000+07:00'
---
เนื่องจากต้องทำการเข้าใช้งาน IPMI ซึ่งตัว IPMI นี้อยู่คนละวงแลนหากเป็น Linux / Mac ก็จะใช้วิธีการตั้ง proxy ของ OS แต่สำหรับ Windows การตั้ง Proxy ของ Windows นั้นค่อนข้างวุ่นวาย เลยจะมาเล่าวิธีที่ผมใช้


วงแลนที่ใช้เป็นลักษณะดังนี้

- เครื่องเป้าหมาย: (วง IPMI) 10.204.99.179
- frontend: มี 2 วงแลนคือ (วงอินเตอร์เน็ต) 10.204.100.211 และ (วง IPMI) 10.204.99.208 

ดังนั้นผมจะต้องเข้าเครื่องเป้าหมาย ผ่านเครื่อง frontend  

ก่อนอื่นจะต้องรัน SSH เพื่อสร้าง TUNNEL ด้วยคำสั่งดังนี้

```
ssh -D 1080 pakkaponp@10.204.100.211 -p 7999
```

เลข 1080 คือพอร์ต sock 5 บนเครื่อง Windows ส่วน 7999 คือพอร์ต ssh บนเครื่อง frontend หาก SSH เป็นพอร์ต 22 ไม่ได้แก้พิเศษแบบเครื่องนี้ ไม่จำเป็นต้องใส่ `-p 7999`

โดยจะได้หน้า terminal ขึ้นมาตามนี้ ห้ามปิด ห้ามสั่ง exit เด็ดขาด ย่อหน้าต่างนี้เอาไว้

![Termianl shell](/assets/images/post/access-tunnel-website-using-firefox-proxy/01_ssh-shell.jpg)

จากนั้นไปที่ตั้งค่า proxy ของ firefox แล้วใส่เป็น sock5 tunnel

![Firefox proxy](/assets/images/post/access-tunnel-website-using-firefox-proxy/02_firefox_proxy_config.jpg)

เท่านี้เราจะสามารถเข้า 10.204.99.179 ผ่าน Firefox ได้แล้ว

![Succesful to access 10.204.99.179](/assets/images/post/access-tunnel-website-using-firefox-proxy/03_able_to_access.jpg)


