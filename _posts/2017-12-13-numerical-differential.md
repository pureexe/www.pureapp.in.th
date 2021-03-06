---
layout: post
title: หาอนุพันธ์ที่จุดที่ต้องการด้วยคอมพิวเตอร์
date: '2017-12-13T14:28:00.000+07:00'
author: Pakkapon Phongthawee
tags:
- mathematics
modified_time: '2017-12-13T14:28:00.000+07:00'
thumbnail: /assets/images/thumbnail/numerical-differential.jpg
mathjax: true
---

วันนี้จะมาเขียนถึงเรื่องการหาอนุพันธ์โดยใช้คอมพิวเตอร์ให้อ่านกันครับ โดยต้องเข้าใจก่อนว่าค่าอนุพันธ์ที่จะทำการหาต่อไปนี้จะได้ตัวเลขที่จุดนั้นออกมาเลย ไม่ใช่ได้ฟังก์ชันออกมา ซึ่งเหมาะจะนำไปใช้หลายงานที่ใช้ค่าเพียงจุดเดียว หากต้องการหาอนุพันธ์ออกมาเป็นฟังก์ชันแล้วล่ะก็จำเป็นจะต้องเอาไปทำการ [ประมาณค่าในช่วง (Interpolation)](https://en.wikipedia.org/wiki/Interpolation) หรือทำการ [Curve fitting](https://en.wikipedia.org/wiki/Curve_fitting) ก่อน ซึ่งสำหรับเนื้อหาเหล่านี้ ไว้ว่ากันต่อในลำดับถัดไปแล้วกันครับ

ขอออกนอกเรื่องไปนิดนึงก่อน ว่าบล็อคของผมเนี่ยที่นานๆ มาเขียนทีเหมือนล้มหายตายจากไปแล้ว แต่ก็ยังมีคนเข้ามาอ่านอยู่เรื่อยๆ อย่างหน้าแปลกใจ แล้วพอมาดูความนิยมพบว่าเรื่องอย่าง [กฎโลปิตาล](/2015/10/lhopital-rule.html) กลับได้รับความนิยมสูงมาก ก็เลยคิดว่า ถ้าเอาเรื่องเกี่ยวกับที่เรียนๆ แล้วจะสอบมานั่งเขียนเนี่ยน่าจะมีคนรออ่านเยอะนะ [ฮ่า] เอาล่ะเข้าเรื่องกันเลยดีกว่า

## พูดถึงอนุพันธ์กันก่อน

อนุพันธ์นี่ได้มาจากสิ่งที่ความต่างน้อยกันมากๆ หลายคนอาจรู้จักนิยามมาในรูป ![](/assets/images/post/numerical-differential/diffbydef01.svg)	 ซึ่งเมื่อแปลงเป็นทฤษฏีบทแล้วจะได้ว่า ![](/assets/images/post/numerical-differential/diffbydef02.svg) นั่นคือการหาค่าความเปลี่ยนแปลงที่น้อยมากๆ นั่นเอง ซึ่งด้วยการพิสูจน์ทางคณิตศาสตร์ ก็พบว่าอนุพันธ์ที่จุดใดจุดหนึ่งนอกจากจะใช้สองแบบข้างต้นได้แล้ว ยังสามารถใช้กับ ![](/assets/images/post/numerical-differential/diffbydef03.svg) และ ![](/assets/images/post/numerical-differential/diffbydef04.svg) ได้อีกด้วย

## หาค่าอนุพันธ์โดยใช้สองจุด

สำหรับหัวใจสำคัญของวิธีนี้คือเลือกให้ช่วง ![](/assets/images/post/numerical-differential/h.svg) มีขนาดที่แคบมากๆ เราก็จะได้ค่าอนุพันธ์ในจุดที่ต้องการมาแล้วอย่างง่ายดาย ไม่ว่าจะใช้ทางลบหรือทางบวกก็ตาม

ตัวอย่างจะหาค่า ![](/assets/images/post/numerical-differential/cos1.svg)  จากการหาอนุพันธ์ ![](/assets/images/post/numerical-differential/cos1.svg) โดยจะหาคำตอบด้วย ![](/assets/images/post/numerical-differential/diffbydef02.svg) ด้วยการเลือก ![](/assets/images/post/numerical-differential/cos1.svg) โดยจะหาคำตอบด้วย ![](/assets/images/post/numerical-differential/h.svg)  ที่มีค่าน้อยมากๆ จนถึงที่เราต้องการ เช่นเลือกค่า ![](/assets/images/post/numerical-differential/h_2_16.svg) ซึ่งเขียนโค้ดเป็นภาษาซี ได้ดังนี้

<script src="https://gist.github.com/pureexe/39100fb244c024254472bcc398d306ad.js"></script><noscript><a href="https://gist.github.com/pureexe/39100fb244c024254472bcc398d306ad.js">diffsin_2point.c</a></noscript>

ซึ่งได้ค่าออกมาเป็น `cos(1) = 0.540302` และ `d/dx sin(1) = 0.540296` ซึ่งค่าต่างกันเพียงเล็กน้อยเท่านั้น โดยการใช้สมการอื่นเช่น ![](/assets/images/post/numerical-differential/diffbydef03.svg) และ ![](/assets/images/post/numerical-differential/diffbydef04.svg) จะให้ความละเอียดที่ใกล้เคียงกัน แต่ก็ยังทีวิธีทำให้ค่าสามารถเข้าใกล้เคียงได้มากกว่านี้อีก

## เพิ่มความละเอียดด้วยวิธีสามจุด

วิธีสองจุดคือการเลือกจุดสองจุดที่ค่า ![](/assets/images/post/numerical-differential/h.svg) ห่างกันน้อยมากๆ แต่ก็ยังคลาดเคลื่อนอยู่เนื่องจากจุดแค่สองจุด จึงเพิ่มข้อมูลจุดเข้าไปเพื่อให้ใกล้เคียงมากขึ้น โดยจะหาจากสมการดังนี้ ![](/assets/images/post/numerical-differential/diff3point.svg) โดยเราจะเลือกหาอนุพันธ์ของ ![](/assets/images/post/numerical-differential/cos1.svg) โดยเลือก ![](/assets/images/post/numerical-differential/h_2_16.svg) เช่นเดิม ซึ่งเขียนเป็นโค้ดภาษาซีได้ดังนี้

<script src="https://gist.github.com/pureexe/f7b859d3744a7634b89b13df4b9a28ff.js"></script><noscript><a href="https://gist.github.com/pureexe/f7b859d3744a7634b89b13df4b9a28ff.js">diffsin_3point.c</a></noscript>

ซึ่งได้ค่าออกมาเป็น `cos(1) = 0.540302` และ `d/dx sin(1) = 0.540302` เรียกได้ว่า **เกือบ** เท่ากันแล้ว แต่ที่ยังใช้คำว่าเกือบ เพราะถ้าลองขยายทศนิยมเป็น 12 ตำแหน่งดูจะเห็นว่า `cos(1) = 0.540302305868` และ `d/dx sin(1) = d/dx sin(1) = 0.540302305858` ซึ่งหากเราต้องการความละเอียดมากกว่านี้ก็ยังมีวิธีที่เพิ่มให้ละเอียดได้ยิ่งกว่านี้อีก

## ความละเอียดขั้นสุดยอดไปกับ Richardson's extrapolation

สำหรับวิธีของริชาร์ดสันนั้นจะให้ ![](/assets/images/post/numerical-differential/a0.svg) เป็นฟังก์ชันที่เราสนใจ โดยเราจะสนใจการหาค่าอนุพันธ์ด้วย ![](/assets/images/post/numerical-differential/diffbydef02.svg) ก็จะได้ว่าให้ ![](/assets/images/post/numerical-differential/a0_equal_diff.svg) ซึ่ง Richardson's extrapolation ให้ ![](/assets/images/post/numerical-differential/ak.svg) โดยตัวอย่างโค้ดภาษาซีต่อไปนี้จะแสดงให้เห็นถึงการใช้วิธีของริชาร์ดสันที่ ![](/assets/images/post/numerical-differential/a1.svg)

<script src="https://gist.github.com/pureexe/80b2b7c1810b49c3c7f3065d042d58ef.js"></script>

จะเห็นว่า `d/dx sin(1) = 0.540298025927` ซึ่งค่าใกล้เคียงกับ ![](/assets/images/post/numerical-differential/cos1.svg) มากกว่าเมื่อเทียบกับการใช้วิธีสองจุด

## ทิ้งท้าย

นอกจากสามวิธีนี้ในการหาค่าอนุพันธ์ที่จุดต้องการแล้ว ยังมีวิธีอื่นอีกแต่ถ้าถามผมว่าผมเขียนอันไหนผมก็คงเขียนสองจุดนั่นและครับ มันเข้าใจง่ายดี แต่มันดันบังเอิญออกสอบสามตัวนี้น่ะสิ ผมก็เลยต้องจำไปสอบ ;-;
