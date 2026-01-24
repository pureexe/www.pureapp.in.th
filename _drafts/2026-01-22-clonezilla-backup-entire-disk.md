---
layout: post
title: ใช้ Clonezilla เพื่อ backup ทั้ง os
date: '2026-01-22T11:46:06.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
modified_time: '2026-01-22T11:46:06.000+07:00'
---


เนื่องจากเราต้องการเปลียน OS ของ node ใน slurm อาจทำให้เกิดปัญหาในภายหลัง เพื่อปลอดภัยทั้งก่อน จะทำการ backup ทั้ง disk เก็บมาไว้ใน NAS โดยได้รู้จักกับซอฟแวร์ตัวหนึ่งคือ Clonezilla ดังนั้นมาลองใช้ไปด้วยกัน

เนื่องจากเครื่องที่ต้องใช้ backup มี IPMI (iDRAC9) ดังนั้นจะพยายามทำผ่าน IPMI ทั้งหมด ก่อนอื่น log เข้ามาใน IPMI ไว้ก่อน

![ภาพ IPMI](/assets/images/post/clonezilla-backup-entire-disk/01-ipmi-frontpage.jpg)

จากนั้นเราก็จะ ssh เข้าเครื่องไปสั่ง shutdown ขอให้ทุกอย่างผ่านไปด้วยดี

![shutdown command](/assets/images/post/clonezilla-backup-entire-disk/02-poweroff.jpg)

หลังจากเครื่องดับแล้ว ทำการเลือก clonezilla iso เพื่อไป boot ได้เลย

![pick clonezilla](/assets/images/post/clonezilla-backup-entire-disk/03-pick-clonezilla.jpg)

จากนั้นตรง boot  เลือกเป็น virtual CD แล้วกดก็เลือก power เพื่อกด power on ได้เลย

![power on](/assets/images/post/clonezilla-backup-entire-disk/04-boot-menu.jpg)

จากนั้นเครื่องจะบูทเข้ามาถึง Clonezilla ก็เริ่มขั้นตอนได้เลย

![start clonezilla](/assets/images/post/clonezilla-backup-entire-disk/07-start_clonezilla.jpg)

เราจะ Backup ทั้ง disk มาเป็นไฟล์ image ก็เลือก device-image 

![start clonezilla](/assets/images/post/clonezilla-backup-entire-disk/08_device_image.jpg)

โดยเราจะ backup ไปใส่อีกเครื่อง เพื่อให้ง่ายเราจะใช้แบบ ssh server เพราะล็อคอินด้วย id password ได้เลย

![select ssh server](/assets/images/post/clonezilla-backup-entire-disk/09_ssh_server.jpg)

หลังจากนั้นจะมีหน้าให้ตั้ง lan เนื่องจากผมใช้ static ip

![static ip config](/assets/images/post/clonezilla-backup-entire-disk/10_select_lan.jpg)

เมื่อ Mount สำเร็จแล้วจะขึ้นข้อมูลขึ้นมา
![mount ssh server success](/assets/images/post/clonezilla-backup-entire-disk/11_mount_ssh_server_success.jpg)

โดยเราจะทำการ clone มาทั้ง disk เลย

![mount ssh server success](/assets/images/post/clonezilla-backup-entire-disk/12_save_disk.jpg)

หลังจากนั้นตั้งชื่อไฟล์ที่จะ save 
![set file name](/assets/images/post/clonezilla-backup-entire-disk/13_save_disk_name.jpg)


