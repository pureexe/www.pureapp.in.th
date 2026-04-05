---
title: เพิ่ม Sveltia CMS ให้ Jekyll
date: 2026-04-05T21:45:00.000+07:00
tags:
  - computer
---

เนื่องจากตอนนี้ย้ายมาใช้ Mac ความจุ 256 GB ซึ่งพื้นที่ SSD ในการใช้งานเล็กมากๆ การ Clone repo ลงมาเพื่อเขียนบล็อกน่าจะกินที่พอตัวเพราะตอนนี้ repo อย่างเดียวก็ 200MB กว่าๆ แล้ว ถ้าลง Ruby อีกน่าจะเสียพื้นทีไปอีกเยอะ เลยลองหาๆ ตัวเลือกอื่นด ก็ได้รู้จักกับ  Git based CMS  ซึ่งทีหลายตัว ตัวหนึ่งที่สุ่มหยิบขึ้นมาคือ [Sveltia CMS](https://sveltiacms.app/)

## การติดตั้ง

โดยวิธีการติดตั้งคือการสร้าง Folder ชื่อ admin จากนั้นก็เพิ่มไปสองไฟล์ คือ index.html กับ config.yml โดยผมได้ใช้ดังนี้

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="robots" content="noindex" />
    <title>Sveltia CMS</title>
  </head>
  <body>
    <script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"></script>
  </body>
</html>
```

### config.yml

```yaml
# yaml-language-server: $schema=https://unpkg.com/@sveltia/cms/schema/sveltia-cms.json

backend:
  name: github
  repo: pureexe/www.pureapp.in.th

media_folder: /assets/images/bucket
public_folder: /assets/images/bucket

collections:
    - name: "posts"
    label: "Published Posts"
    folder: "_posts"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
            - { name: "title", label: "Title" }
            - { name: "date", label: "Date", widget: "datetime" }
            - { name: "tags", label: "Tags", widget: "list" }
            - { name: "body", label: "Body", widget: "markdown" }
      - name: "drafts"
    label: "Drafts"
    folder: "_drafts"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
            - { name: "title", label: "Title" }
            - { name: "date", label: "Date", widget: "datetime" }
            - { name: "tags", label: "Tags", widget: "list" }
            - { name: "body", label: "Body", widget: "markdown" }
```

เมื่อติดตั้งเรียบร้อยแล้ว สามารถเข้าไปทีหน้า admin ได้เลย  โดยจะมี 3 ตัวเลือกคือ

- Work with Local Repository
- Sign In with Github
- Sign In with GitHub using Token

โดยอันนี้ลองโพสมาจากแบบ Local ดูก่อน พบว่าใช้ได้ดี แต่เดี๋ยวลองแบบ เข้าไปใช้ใน Mac จริงๆ ถ้าดีเดี๋ยวมาอัปเดตอีกทีหนึ่ง

 แต่สิ่งหนึ่งที่รู้สึกมีปัญหากับ Sveltia คือโฟลเดอร์  media สำหรับเก็บรูป ไม่รองรับ sub directory มี [Github Issue](https://github.com/sveltia/sveltia-cms/issues/420) แนะนำเข้าไปอยู่ หวังว่าทาง Sveltia จะแก้ในอนาคต
