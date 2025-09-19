---
layout: post
title: แก้ปัญหา Secureboot แม้จะใช้ Factory Key ไม่ได้ โดยการคัดลอกคีย์จากเครื่องอื่น
date: '2025-09-19T23:21:06.000+07:00'
author: Pakkapon Phongthawee
tags:
- คอมพิวเตอร์
thumbnail: /assets/images/thumbnail/solve-cant-secure-boot-with-factory-key.jpg
modified_time: '2025-09-19T23:21:06.000+07:00'
---

หลังจากซื้้อ Core Ultra 165H มาจาก Taobao ปรากฏว่าไม่สามารถเปิดใช้ Secure Boot ได้ หลายๆ เว็บบอกให้ลองปิด Secure Boot แล้วเปิดใหม่ รวมถึง Reset กลับไปที่ Factory Key ก็ไม่สามารถแก้ปัญหาได้ 

แต่ในที่สุดก็เจอ [กระทู้ Reddit](https://www.reddit.com/r/EryingMotherboard/comments/1nk487a/erying_ultra5_125h_es_review/) มารีวิวการใช้ 125H ES ซึ่งได้ลงเรื่องเกี่ยวกับการแก้ปัญหา Secure Boot ไว้ เลยเอามาแบ่งปันกันครับ

<blockquote class="reddit-embed-bq" style="height:500px" data-embed-showmedia="false" data-embed-height="240"><a href="https://www.reddit.com/r/EryingMotherboard/comments/1nk487a/erying_ultra5_125h_es_review/">Erying  Ultra5 125h ES review</a><br> by<a href="https://www.reddit.com/user/THENOGODwat/">u/THENOGODwat</a> in<a href="https://www.reddit.com/r/EryingMotherboard/">EryingMotherboard</a></blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>

ก่อนอื่นเลย เรต้องมีคอมพิวเตอร์อีกเครื่อง โชคดีที่ผมมี Asrock A520 จากนั้นให้เข้าไปในหน้าตั้งค่า Secure boot แล้วเลือกจาก Factory mode ให้เป็น Custom กระทั่งเจอหน้า Key Management

![Key management](/assets/images/post/solve-cant-secure-boot-with-factory-key/01_keymanagement_asrock.jpg)

จากนั้นเราจะทำการ export ตัว Key ทั้งสิ้น 4 อันออกมาใส่ flashdrive (อย่าลืมเสียบ flashdrive ด้วยนะ) โดยการกด Enter เข้าไป

![Key management](/assets/images/post/solve-cant-secure-boot-with-factory-key/02_keymanagement_exxport.jpg)

จะมีทั้งสิ้น 4 อันได้แก่

 - Platform Key (PK)
 - Key Exchange Keys (KEK)
 - Authorized Signatures (DB)
 - Forbidden Signature (DBX)

อย่าลืมจดจำนวนไว้ด้วย ตัวอย่างอันนี้จะมีจำนวนคีย์ทั้งสิ้น 1/1/2/77 ให้จดไว้เผื่อพลาด import ผิด

เมื่อมาดูใน flash drive จะมีไฟล์เพิ่มขึ้นมา 4 ไฟล์คือ PK, KEK, db, dbx

![4 files](/assets/images/post/solve-cant-secure-boot-with-factory-key/03_filename.jpg)

จากนั้นไปเครื่องที่มีปัญหา secure boot ให้ไปที่เมนูของคีย์ทั้ง 4 เมื่อ enter เข้าไปจะมีให้เลือก update

![Update PK Key](/assets/images/post/solve-cant-secure-boot-with-factory-key/04_update_pk_key.jpg)

ตอนนี้ต้องอ่านดีๆ ให้ตอบ **No** เพื่อเลือกไฟล์จาก Usb

![Answer no for USB](/assets/images/post/solve-cant-secure-boot-with-factory-key/05_answer_no_for_browse_file.jpg)

หลังจากนั้นเลือกไฟล์ PK ที่อยู่ใน flash drive

![Select PK file](/assets/images/post/solve-cant-secure-boot-with-factory-key/06_seleck_PK_file.jpg)

หลังจากนั้นให้เลือก Public Key Certificate

![Public Key Certificate](/assets/images/post/solve-cant-secure-boot-with-factory-key/07_public_key_certificate.jpg)

ทำซ้ำให้ครบทั้ง 4 ไฟล์แล้วอย่าลืมเช็คจำนวนว่าได้เท่าเดิมไหม (1/1/2/77)

![Check the number again](/assets/images/post/solve-cant-secure-boot-with-factory-key/08_check_number_again.jpg)


พอรีเครื่อง ตอนนี้เครื่องจะขึ้นว่าเป็น Secure boot แล้ว

![Check the number again](/assets/images/post/solve-cant-secure-boot-with-factory-key/09_secureboot.jpg)
