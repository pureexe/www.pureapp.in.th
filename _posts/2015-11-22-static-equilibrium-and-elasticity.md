---
layout: post
title: สมดุลสถิตและสมบัติความยืดหยุ่น
date: 2015-11-25T20:47:00.000+07:00
author: Pakkapon Phongthawee
tags:
- วิทยาศาสตร์
modified_time: 2015-11-25T20:47:20.000+07:00
mathjax: true
thumbnail: /assets/images/thumbnail/static-equilibrium-and-elasticity.png
---
ในรายวิชาฟิสิกส์ทั่วไป 1 ที่ผมจะต้องสอบในปลายภาคนี้หนึ่งในนั้นมีเรื่องสมดุลสถิตและสมบัติความยืดหยุ่นอยู่ดังนั้นผมจะมาสรุปใจความคร่าวๆให้ได้อ่านกันนะครับ

##เงื่อนไขการสมดุล

1. แรงลัพธ์ภายนอกเป็นศูนย์ ($$ \Sigma F = 0$$)
2. ทอร์กลัพธ์ภายนอกเป็นศูนย์ ($$ \Sigma \tau = 0$$)

## สมบัติยืดหยุ่นของของแข็ง

การอธิบายการผิดรูปของของแข็งจะวัดในรูปของความเค้น (Stress) และความเครียด (Strain) โดยที่

**ความเค้น** (Stress) เป็นปริมาณของแรงที่ทำให้วัตถุเกิดการผิดรูปซึ่งหาจากอัตราส่วนของแรงภายนอกกระทำต่อพื้นที่หน้าตัด

**ความเครียด** (Stain) เป็นการวัดลักษณะของการผิดรูปของวัตถุเมื่อมีแรงภายนอกมากระทำ

โดยจะพบว่าสัดส่วนความเครียดต่อความเค้นมีค่าคงที่เราเรียกว่ามอดูลัสการยืดหยุ่น (Elastic Modulus) แบ่งเป็น 3 แบบได้แก่

### ความหยืดหยุ่นเชิงเส้น

**มอดูลัสของยังก์** (Young's modulus)

$$ Y = \frac{ความเค้นดึง}{ความเครียดดึง} = \frac{\frac{F}{A}}{\frac{\Delta L}{L}} $$

- ความเค้นดึง (Tensile stress) เป็นอัตราส่วนของแรงภายนอก (F) ที่กระทำต่อพื้นที่หน้าตัด (A)
- ความเครียดดึง (Tensile strain) คืออัตราส่วนของความยาวที่เปลี่ยนไป ($$\Delta$$L) ต่อความยาวเดิม (L)

### ความยืดหยุ่นเชิงพื้นที่

**มอดูลัสเฉือน** (Shear modulus)

$$ S = \frac{ความเค้นเฉือน}{ความเครียดเฉือน} = \frac{\frac{F_{//}}{A}}{\frac{\Delta x}{h}}$$

- ความเค้นเฉือน เป็นอัตราส่วนของแรงที่กระทำขนานกับพื้นที่ต่อพื้นที่
- ความเรียดเฉือยคือระยะทางในแนวราบที่เปลี่ยนไปเมื่อผิวหน้าวัตถุเคลื่อนที่ ($$\Delta$$x) ต่อความสูงวัตถุ x

### ความยืดหยุ่นเชิงปริมาตร

**มอดูลัสเชิงปริมาตร** (Bluk modulus)

$$ B = \frac{ความเค้นเชิงปริมาตร}{ความเครียดเชิงปริมาตร} = -\frac{\frac{F}{A}}{\frac{\Delta V}{V_i}} = -\frac{\Delta P}{\frac{\Delta V}{V_i}}$$

- ความเค้นเชิงปริมาตร เป็นอัตราส่วนของแนงทั้งหมด (F)ที่กระทำต่อผืดสัมพัส (A) และเนื่องจากความดัน (P) ซึ่ง้ท่ากับ $$\frac{F}{A}$$ ดังนั้นถ้าความดันบนวัตถุเปลี่ยนไปเท่ากับ $$ \Delta P = \frac{\Delta F}{A}$$ ซึ่งวัตถุจะมีปริมาตรเปลี่ยนไป $$ \Delta V $$
- ความเครียดเชิงปริมาตร มีค่าเท่ากับปริมาตรที่เปลี่ยนไป ($$\Delta V$$) ต่อปริมาตรเดิมวัตถุ ($$V_i$$)