---
layout: post
title: "คิดยังไงถึงเลือก Mciro:bit"
date: '2017-04-20T14:30:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
modified_time: '2017-04-20T14:30:00.000+07:00'
thumbnail: /assets/images/thumbnail/why-i-choose-microbit.jpg
---
[Micro:bit](https://en.wikipedia.org/wiki/Micro_Bit) คือบอร์ดเพื่อการศึกษา เหมาะสำหรับให้ผู้ที่พึ่งเริ่มใช้บอร์ด และลองเขียนโปรแกรมเป็นครั้งแรกได้ใช้งาน ซึ่งเป็นบอร์ดที่ทางสถานีโทรทัศน์[BBC](http://www.bbc.com) ได้ทำแจกจ่ายให้กับนักเรียนในอังกฤษจำนวนหนึ่งล้านชุด และตอนนี้ก็เริ่มมีการผลิตสำหรับขายในเชิงพาณิชย์กันบ้างแล้ว ซึ่งเหมาะสำหรับการซื้อให้ลูกหลานได้นำมาลองเล่นเพื่อจุดประกายทางด้านคอมพิวเตอร์มาก ซึ่งขอบอกไว้ก่อนเลยว่า โพสนี้ถูกเขียนไว้ก่อนที่ Micro:bit จะส่งมาถึงมือผม ซึ่งพอได้ลองเล่นแล้วจะเขียนอธิบายประสบการณ์หลังจากใช้แล้วไว้ให้ทุกท่านอ่านอีกครั้ง แน่นอนว่า ผมจะสร้างอะไรสนุกๆ มาโพสลงโพสนี้ด้วย

## บอร์ดในอดีต

ก่อนที่เราจะบอกเหตุผลว่าทำไมควรซื้อให้ลูกหลานเล่น ก่อนอื่นขอย้อนความเรื่องบอร์ดเพื่อการศึกษาที่ผมเคยได้เล่นในอดีตบ้างดีกว่า ซึ่งรายชื่อบอร์ดที่จะเขียนดังต่อไปนี้จะเรียงตาม เวลาที่ผมได้ลองเล่นไว้แล้ว

### ET-Robot LOGO 877

![](/assets/images/post/why-i-choose-microbit/et877.jpg)  

บอร์ดตัวแรกที่ผมได้เล่นคือ [ET-Robot LOGO 877](http://www.ett.co.th/product/23A05.html) ซึ่งได้ลองเล่นครั้งแรกตอนที่ยังอยู่ชั้นประถมศึกษาปีที่ 5 เป็นบอร์ดสไตล์หุ่นยนต์ซึ่งสามารถสั่งการได้ง่ายโดยการลากวางโฟลชาร์จของขั้นตอนการทำงาน เพื่อสร้างเป็นโปรแกรมให้บอร์ดทำงานตามซึ่งสามารถทำได้ง่าย แต่บอร์ดนี้ค่อนข้างปิดกั้นความสร้างสรรค์เนื่องจากเราไม่สามารถแกะออกมาปรับแต่งได้ด้วยตัวเอง เพราะอาจารย์ห้ามไว้ เนื่องจากราคาอยู่ที่ 3,750 บาท ทำให้มันดูเป็นของที่ล็อคจิตนาการณ์ของเราเอาไว้ ไม่สามารถปลดปล่อยความฝันวัยเด็กให้โลดแล่นออกมาได้

### IPST MicroBox

![](/assets/images/post/why-i-choose-microbit/ipst_box.jpg)  

บอร์ด [IPST MicroBox](http://www.ipst-microbox.com/) เป็นบอร์ดในวิชาบังคับเรียนของห้องเรียนพิเศษตอนมัธยมศึกษาปีที่ 4 ซึ่งตอนรุ่นผม ยังเป็นบอร์ดรุ่นแรกไม่ใช่รุ่น SE รุ่นนี้มีส่วนเสริมที่เป็นเซนเซอร์ในตัวแถมมาด้วยค่อนข้างเยอะ ซึ่งช่วยเปิดกว้างความคิดสร้างสรรค์ได้มาก แต่ GPIO ของบอร์ดก็ถูกครอบไว้ด้วย socket เฉพาะ ทำให้เวลาจะแก้ไขอะไรก็รู้สึกค่อนข้างลำบากใจ แต่เราก็ยังพอใช้สายจั้มเส้นเดียวมาต่อได้ แลนอกจากนี้ก็พบปัญหาว่าการเขียนโปรแกรมยากมาก ทำให้เรียนรู้ได้ค่อนข้างช้าสำหรับมือใหม่ เนื่องจากใช้ภาษา C จริงๆ ไม่ใช่ภาษา C แบบ Ardunio ที่ขึ้น setup กับ loop ไว้ให้ ต้อง include โน้นนี่ มานั่งทำ bitwise operation กัน ทำให้ถึงกับคิดในใจว่า "นี่มันของสำหรับมือใหม่จริงๆ หรอ" แต่ในภายหลังก็มีการออกรุ่น SE แล้วเปลี่ยนไปใช้ Ardunio Editor ทำให้การเขียนโปรแกรมง่ายยิ่งขึ้น ราคาของบอร์ดรุ่นแรกนั้นผมหาราคาไม่ได้ แต่เคยถามอาจารย์บอกว่าราคาอยู่ที่กล่องละ 4,xxx บาท ส่วนรุ่น SE ราคาหน้าเว็บอยู่ที่ 2,889 บาท

### LEGO Mindstorms NXT 2.0

![](/assets/images/post/why-i-choose-microbit/nxt.jpg)

บอร์ด [LEGO Mindstorms NXT 2.0](https://shop.lego.com/en-US/LEGO-MINDSTORMS-NXT-2-0-8547) เป็นวิชาบังคับเรียนตอนมัธยมศึกษาปีที่ 4 อีกเช่นกัน ตัวนี้ต่อค่อนข้างสนุกเพราะเหมือนเล่น LEGO อีกทั้งยังมี SDK ให้ใช้ มี Plugin ให้โหลดมากมายต่างจาก 2 ตัวก่อนหน้า ระบบมันเปิดกว้างถึงขนาดที่ผมทำ[แอปพลิเคชันแอนดรอย](https://github.com/pureexe/NXT_firealert)สำหรับใช้ร่วมกัน โดยไม่ต้องต่อ Hardware เพิ่มเติม ระดับการเขียนก็มีตั้งแต่ง่ายๆ อย่างลากบล็อควาง จนกระทั่งถึงสุดหินอย่างการเจาะลึกภาษา C เรียกได้ว่าสมบูรณ์แบบ แต่ติดอยู่อย่างเดียวนั่นคือราคาที่สูงถึง 2x,xxx บาทนั่นเอง

## Micro:bit

หลังจากเล่าประสบการณ์การสัมผัสบอร์ดเพื่อการเรียนรู้มา 3 ตัวแล้ว ลองมาดูฝั่ง Micro:Bit บ้างดีกว่าว่าจุดเด่นและจุดด้อยจะเป็นอย่างไรบ้างเมื่อนำมาเทียบกัน

### ด้านการเขียนโปรแกรม

Micro:Bit นั้นสามารถใช้บล็อคลากวางในการเขียนโปรแกรมได้โดยผ่าน [MicroBit.org](http://microbit.org/code/) และนอกจากนี้ยังสามารถใช้ภาษา Javascript ซึ่งเป็นภาษาที่ไม่ยากมากสำหรับผู้เริ่มต้น หรือแม้แต่จะลงลึกภาษา C ก็สามารถดาวน์โหลด SDK มาใช้ได้เช่นกัน ทำให้ช่วงอายุที่เหมาะต่อการเล่น Micro:bit นั้นกว้างมาก ตั้งแต่เด็กเริ่มเล่นคอมจนถึงผู้ใหญ่ที่ต้องการเรียนรู้

### ด้าน Hardware

Micro:bit เอง สามารถปรับแต่งเพิ่มเติมได้ง่ายจาก GPIO บริเวณด้านล่าง ซึ่งหาต้องการต่อเพิ่มก็เพียงนำสายไฟมาแปะไว้ด้วยเทป หรือจะใช้ปากจระเข้หนีบก็ได้ ทำให้สามารถเพิ่มเติมความคิดสร้างสรรค์ได้มาก นอกจากนี้ LED เริ่มต้นที่มีให้ 25 ดวงบนบอร์ดก็เป็นสิ่งที่ทำให้สามารถเริ่มเรียนรู้ได้ทันทีโดยไม่ต้องซื้ออุปกรณ์เพิ่มเติมอีก

### ด้านราคา

Micro:bit ขายอยู่ที่ราคา £13 หรือเป็นเงินไทย 580 บาท ซึ่งแม้จะไม่ถูกเท่าไรสำหรับ MicroController (สำหรับท่านที่ต้องการความถูก ผมแนะนำ Ardunio UNO R3) แต่เมื่อเทียบกับบอร์ดที่ซอฟแวร์ทำมาเพื่อการศึกษาแล้ว นับว่าถูกมาก เหมาะสำหรับซื้อให้ลูกหลานเล่น

### สรุป

ตัวนี้น่าสนใจมาก ตอนนี้ของกำลังส่งมาถึงผม ซึ่งผมจะทยอยเขียนถึงเจ้าบอร์ดนี่ลงบล็อคเรื่อยๆ ครับ

## ช่วงขายของเน้นๆ

สำหรับบอร์ด Micro:bit ต้องขอบคุณ [IOXhop](http://www.ioxhop.com) ที่ส่งมาให้ผมฟรีโดยไม่คิดเงิน ซึ่งหากท่านสนใจสามารถสั่งซื้อกับทาง IOXhop ในราคา 580 บาท ได้ที่ [ลิ้งค์นี้](http://www.ioxhop.com/product/523/microbit-arm-base-embedded-for-education)