---
layout: post
title: หาปริพันธ์บนช่วงที่ต้องการด้วยคอมพิวเตอร์
date: '2017-12-26T12:47:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- mathematics
modified_time: '2017-12-26T12:47:00.000+07:00'
thumbnail: /assets/images/thumbnail/numerical-integration.jpg
---
สำหรับการหาปริพันธ์บนช่วงที่ต้องการ หลักการหาก็คือการประมาณโดยการหาพื้นที่ใต้กราฟนั่นเอง โดยสำหรับวิธีการหาพื้นที่ใต้กราฟให้ค่าใกล้เคียงกับค่าปริพันธ์นั้นมีอยู่ด้วยกันหลายวิธี ซึ่งแต่ละวิธีจะมีค่าคลาดเคลื่อนมากน้อยแตกต่างกันไป โดยคราวนี้จะพูดถึงวิธีการหาปริพันธ์ต่างๆ ดังนี้

## วิธีสี่เหลี่ยมคางหมู (Trapzoid Rule)

สำหรับวิธีสี่เหลี่ยมคางหมูนั้น พบว่ามีใช้กันมายาวนาน ตั้งแต่ยุค 50 BC (~พ.ศ. 500) โดยชาว[บาบิโลน](https://en.wikipedia.org/wiki/Babylon)ได้ใช้ในการอินทิเกรตเพื่อหาความเร็วในการเคลื่อนที่ของดาวพฤหัส [(อ้างอิง)](http://science.sciencemag.org/content/351/6272/482.full) โดยวิธีนี้จะใช้วิธีการสร้างสี่เหลี่ยมคางหมูขึ้นมาใต้กราฟ เมื่อให้ h เป็นความกว้างของฐานสี่เหลี่ยมคางหมู a คือขอบซ้ายของขอบเขตที่เราต้องการอินทิเกรต และ b คือขอบขวาที่เราต้องการอินทิเกรต โดยเราจะอินทิเกรต ![](/assets/images/post/numerical-integration/x2.svg) บนช่วง 0.5 ถึง 1 ได้ดังภาพ

![](/assets/images/post/numerical-integration/x2-a-b.jpg){: .center-eq}

โดยจากสูตรการหาพื้นที่สี่เหลี่ยมคางหมู ได้ว่าพื้นที่ของสี่เหลี่ยมคางหมูด้านซ้ายสุดคือ

![](/assets/images/post/numerical-integration/integration01.svg){: .center-eq}

เมื่อนำสี่เหลี่ยมคางหมูที่อยู่ในพื้นที่ต้องการอินทิเกรตมาบวกกันจะได้ว่า

![](/assets/images/post/numerical-integration/integration02.svg){: .center-eq}

จะสังเกตได้ทุกตัวที่ไม่ใช่ตำแหน่งที่ x = a และ x = b จะถูกใช้ซ้ำสองครั้ง จึงสามารถจัดรูปได้เป็น  

![](/assets/images/post/numerical-integration/integration03.svg){: .center-eq}

นั่นคือเราสามารถประมาณค่าอินทิเกรตในช่วยได้โดยวิธีสี่เหลียมคางหมูดังนี้

![](/assets/images/post/numerical-integration/integration04.svg){: .center-eq}

ซึ่งสามารถเขียนเป็นโค้ดภาษาซีหาอินทิเกรตของ ![](/assets/images/post/numerical-integration/x2.svg) บนช่วง 0.5 ถึง 1 โดยให้ช่วง h กว้าง 0.01 ได้ว่า

<script src="https://gist.github.com/pureexe/8a1cee4f1ba9fdb12bf7ae390dc60916.js"></script><noscript><a href="https://gist.github.com/pureexe/8a1cee4f1ba9fdb12bf7ae390dc60916.js">trapzoid.c</a></noscript>

จากโค้ดจะได้ผลลัพธ์ว่า `Trapzoid = 0.281874` และส่วนค่าจริงนั่นได้ว่า `Exact = 0.291667` ซึ่งจะเห็นว่าค่าที่ได้นั้นใกล้เคียงกับผลลัพธ์ของการอินทิเกรตจริงหมูนั้นจะมีค่าคลาดเคลื่อนอยู่ ซึ่งเราสามารถคำนวณค่าคลาดเคลื่อนได้จาก

![](/assets/images/post/numerical-integration/error-trapzoid.svg){: .center-eq}

## วิธีซิมสัน (Simpson's rule)

สำหรับวิธีการอินทิเกรตของซิมสันนั้นจะมีความคลาดเคลื่อนน้อยกว่าวิธีการของสี่เหลี่ยมคางหมู สำหรับที่มานั้น ผมคงต้องไปเรียนในระดับที่สูงขึ้น แต่สำหรับวิธีการนำไปใช้สามารถหาค่าประมาณอินทิเกรตได้จาก

![](/assets/images/post/numerical-integration/simpson-rule.svg){: .center-eq}

สามารถเขียนเป็นโค้ดภาษาซีหาอินทิเกรตของ ![](/assets/images/post/numerical-integration/x2.svg) บนช่วง 0.5 ถึง 1 โดยให้ช่วง n = 100 ได้ดังนี้
<script src="https://gist.github.com/pureexe/21c4a9f56a4dbb1846cc32dc4f6275be.js"></script><noscript><a href="https://gist.github.com/pureexe/21c4a9f56a4dbb1846cc32dc4f6275be.js">simpson_rule.c</a></noscript>

จากโค้ดจะได้ผลลัพธ์ว่า `Trapzoid = 0.291667` และส่วนค่าจริงนั่นได้ว่า `Exact = 0.291667` ซึ่งจะเห็นว่าค่าที่ได้นั้นใกล้เคียงกับผลลัพธ์ของการอินทิเกรตมาก แต่การอินทิเกรตโดยใช้วิธีซิมสันั้นจะมีค่าคลาดเคลื่อนอยู่ ซึ่งเราสามารถคำนวณค่าคลาดเคลื่อนได้จาก

![](/assets/images/post/numerical-integration/error-simpson.svg){: .center-eq}

## วิธีการอื่นๆ เพิ่มเติม
นอกจากสองวิธีที่ได้กล่าวถึงขั้นต้นแล้ว ยังมีวิธีการอินทิเกรตแบบอื่นๆ ที่ทำให้ค่าคลาดเคลื่อนน้อยลงได้อีก แต่ก็จะทำให้การเขียนยากขึ้นเช่นกัน หากท่านสนใจสามารถหาอ่านเพิ่มเติมได้ดังนี้
- [Romberg's method](https://en.wikipedia.org/wiki/Romberg%27s_method)
- [Gaussian quadrature](https://en.wikipedia.org/wiki/Gaussian_quadrature)
- [Newton–Cotes formulas](https://en.wikipedia.org/wiki/Newton%E2%80%93Cotes_formulas)
