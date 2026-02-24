---
layout: post
title: ติดตั้ง nginx เพื่อแจกไฟล์ผ่าน Alpine 
date: '2026-02-22T11:29:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
modified_time: '2026-02-22T11:29:00.000+07:00'
---

เนื่องจากตอนนี้ OneDrive ที่ใช้แจก Dataset สำหรับงานวิจัยอยู่เต็ม เลยจะลองมาย้ายแบบ Selfhost ดูบ้าง แต่ว่าด้วยความที่ปกติใช้คอมโบ Ubuntu + Apache มาตลอดซึ่งค่อนข้างจะกินแรมพอสมควร เลยจะลองใช้คอมโบ Alpine + Nginx ติดตั้งบน Proxmox LXC ดูบ้างว่าจะเป็นอย่างไร

โดยก่อนอื่นเราทำการโหลด template ของ alpine มาแล้วทำการ setup container ให้เรียบร้อย

![Setup Alpine container][/assets/images/post/2026-02-22-install-nginx-in-alpine/01-setup_alpine.jpg]

โดย Container ที่เรา setup ขึ้นมานี้เป็น CT104 เพื่อให้เข้าถึงไฟล์ได้ เราจะแก้ไข config ของ container กันสักหน่อย 

โดยผมได้ทำการใส่ disk ไว้ที่ /mnt/d2 แต่เนื่องจากยังไม่รองรับการเพิ่ม directory จากเว็บโดยตรง เราจึงทำการแก้ config ตามนี้

```
nano /etc/pve/lxc/104.conf
```

โดยเราจะทำการเพิ่ม 1 บรรทัดเพื่อให้มี /data โผล่เข้ามาใน container
```
mp0: /mnt/d2,mp=/data
```

หากไม่มีอะไรผิดพลาดจะสามารถ start container ที่มี /data อยู่ด้านในได้
จากนั้นทำการลง nginx โดยเราจะทำการลง FancyIndex ด้วยเนื่องจากจะเป็นตัวที่ทำการแสดงหน้าสำหรับโหลดไฟล์

```
apk update
apk add nginx nginx-mod-http-fancyindex
```

จากนั้นเพิ่มให้ nginx ทำงานอัตตโนมัตเมื่อเปิด

```
rc-update add nginx default
```

จากนั้นให้เปิดใช้งาน fancyindex ก่อนโดย

```
ืnano /etc/nginx/nginx.conf
```

ที่หัวไฟล์ให้ใส่ว่า

```
load_module modules/ngx_http_fancyindex_module.so;
```

จากนั้นเราจะแก้ default web ให้ใช้ fancy index
```
nano /etc/nginx/http.d/default.conf
```

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /data;

        access_log off;

        # Everything is a 404
        location / {
                fancyindex on;
                fancyindex_localtime on;
                fancyindex_exact_size off;
                fancyindex_header "/.fancyindex/header.html";
                fancyindex_footer "/.fancyindex/footer.html";
                fancyindex_ignore "^\."
        }

        # You may need this to prevent return 404 recursion.
        location = /404.html {
                internal;
        }
}

```

โดยที่ใช้จะแก้เป็นแบบนี้

หลังจากแก้เสร็จ

rc-service nginx restart

จากนั้นลองเข้าเว็บดู ถ้าเห็นหน้าแบบนี้คือสำเร็จแล้ว ที่เหลือคือมานั่งเขียน fancyindex กันต่อ