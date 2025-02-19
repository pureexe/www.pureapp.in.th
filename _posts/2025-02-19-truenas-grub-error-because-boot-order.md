---
layout: post
title: TrueNAS เปิดไม่ติด GRUB error เพราะ boot order
date: '2025-02-19T12:12:06.000+07:00'
author: Pakkapon Phongthawee
tags:
- computer
thumbnail: /assets/images/thumbnail/truenas-grub-error-because-boot-order.jpg
modified_time: '2025-02-19T12:12:06.000+07:00'
---

วันนี้ตัดสินใจที่จะเพิ่ม boot drive จากลูกเดียวเป็น mirror เผื่อ TrueNAS ระเบิด ปรากฏว่าพอรีเครื่องปุ๊บ ระเบิดเลย เกิดอาการ Grup error ตอนแรกเกือบลง OS ใหม่แล้ว (งานหยาบเพราะตั้ง user id ไว้ไม่เหมือนชาวบ้าน) แต่พอเข้าใน bios ดูจะเห็นว่า boot order ที่ชื่อ debain ดันอยู่ใต้ intel ssd ดังนั้นปิด intel ssd ออกให้ boot order เหลือ debain เพียง 2 ตัว (2 boot drive ที่ mirror) กันก็หมดปัญหา ฉะนั้นก่อน จะเพิ่ม boot drive ใหม่ให้ mirror อย่าลืมเซ็ท bios ให้เรียบร้อยก่อน