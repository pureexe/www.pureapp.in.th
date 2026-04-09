---
title: อยากให้ภาพ smooth ใช้ image flattening อาจจะดีกว่า total variation
date: 2026-04-09T23:43:00
thumbnail: ''
tags:
  - mathematics
---

ตอนนี้มีปัญหาว่า มี learnable parameter แล้วเมื่อ optimize ตัว learnable parameters มันจะดูไม่ค่อย smooth เลยพยายามจะใช้ total variation แต่สิ่งที่เกิดขึ้นคือขอบจะมีความเบลอ

จนกระทั่งได้รู้จักกับ [Image flattening](https://dl.acm.org/doi/epdf/10.1145/2766946) พบว่ารูปที่ทำได้สวยมาก เลยจะมาบันทึกไว้ว่าทำอย่างไร
