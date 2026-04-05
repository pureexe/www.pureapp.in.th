---
layout: post
title: Cosmos1-diffusion-renderer จัดการเงาใน albedo ได้ดีมาก
date: '2025-09-05T14:55:06.000+07:00'
author: Pakkapon Phongthawee
tags:
- research
thumbnail: /assets/images/thumbnail/diffusion-renderer-albedo-no-more-cast-shadow.jpg
modified_time: '2025-09-05T14:55:06.000+07:00'
---

ตอนนี้กำลังมองหาวิธีดึง Albedo ออกมาจากรูป ปัญหาใหญ่ที่เจอเลยคือเรื่องของเงา จนกระทั่งได้พบกับ  [Cosmos1-diffusion-renderer](https://research.nvidia.com/labs/toronto-ai/DiffusionRenderer/) ที่สามารถขจัดเงาออกได้ดีมากๆ  

<a class="button is-fullwidth" href="/2025/09/diffusion-renderer-albedo-no-more-cast-shadow">
This post available in English | โพสนี้มีภาษาอังกฤษ
</a>


โดยจะโชว์รูปจาก [Unsplash.com](https://unsplash.com/) โดยเปรียบเทียบกับ [Coloful Diffuse](https://yaksoy.github.io/ColorfulShading/) ซึ่งเป็นงานที่ดีที่สุดก่อนหน้า

## ลบเงา 


<table class="table is-bordered">
    <thead>
        <th style="text-align:center">Input Image</th>
        <th style="text-align:center"><a href="https://yaksoy.github.io/ColorfulShading/" target="_blank">Colorful Diffuse</a></th>
        <th style="text-align:center"><a href="https://research.nvidia.com/labs/toronto-ai/DiffusionRenderer/" target="_blank">Cosmos1-Diffusion-Renderer</a></th>
    </thead>
    <tbody>
        <tr>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/third_party/unsplash/anime_wall.jpg" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/colorful-diffuse/anime_wall.png" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/cosmos1-diffusion-renderer/anime_wall.jpg" />
                </figure>
            </td>
            <tr>
                <td colspan="3" style="text-align:center">
                    ดูเงาที่ใต้มือ ลบได้ดีมาก
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                    รูปภาพโดย <a href="https://unsplash.com/@graciadharmaa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gracia Dharma</a> on <a href="https://unsplash.com/photos/woman-in-black-shirt-taking-selfie-qTlbO6mkQH0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </td>
            </tr>
        </tr>
    </tbody>
</table>


<table class="table is-bordered">
    <thead>
        <th style="text-align:center">Input Image</th>
        <th style="text-align:center"><a href="https://yaksoy.github.io/ColorfulShading/" target="_blank">Colorful Diffuse</a></th>
        <th style="text-align:center"><a href="https://research.nvidia.com/labs/toronto-ai/DiffusionRenderer/" target="_blank">Cosmos1-Diffusion-Renderer</a></th>
    </thead>
    <tbody>
        <tr>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/third_party/unsplash/car.jpg" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/colorful-diffuse/car.png" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/cosmos1-diffusion-renderer/car.jpg" />
                </figure>
            </td>
            <tr>
                <td colspan="3" style="text-align:center">
                    เงาที่พื้นก็ถูกลบอย่างหมดจด
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   รูปภาพโดย <a href="https://unsplash.com/@sp3v?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Spencer Everett</a> on <a href="https://unsplash.com/photos/re-beetle-beside-coconut-trees-DdVOCPTofFc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </td>
            </tr>
        </tr>
    </tbody>
</table>

<table class="table is-bordered">
    <thead>
        <th style="text-align:center">Input Image</th>
        <th style="text-align:center"><a href="https://yaksoy.github.io/ColorfulShading/" target="_blank">Colorful Diffuse</a></th>
        <th style="text-align:center"><a href="https://research.nvidia.com/labs/toronto-ai/DiffusionRenderer/" target="_blank">Cosmos1-Diffusion-Renderer</a></th>
    </thead>
    <tbody>
        <tr>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/third_party/unsplash/car2.jpg" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/colorful-diffuse/car2.png" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/cosmos1-diffusion-renderer/car2.jpg" />
                </figure>
            </td>
            <tr>
                <td colspan="3" style="text-align:center">
                    แม้ว่าจะลบเงาได้ดี แต่อันนี้กับมีปัญหาเมื่อเจอเลนส์แฟร์ (ซ้ายล่างของกับรถ )
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   รูปภาพโดย <a href="https://unsplash.com/@introspectivedsgn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Erik Mclean</a> on <a href="https://unsplash.com/photos/silver-sports-coupe-on-asphalt-road-ZRns2R5azu0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </td>
            </tr>
        </tr>
    </tbody>
</table>


<table class="table is-bordered">
    <thead>
        <th style="text-align:center">Input Image</th>
        <th style="text-align:center"><a href="https://yaksoy.github.io/ColorfulShading/" target="_blank">Colorful Diffuse</a></th>
        <th style="text-align:center"><a href="https://research.nvidia.com/labs/toronto-ai/DiffusionRenderer/" target="_blank">Cosmos1-Diffusion-Renderer</a></th>
    </thead>
    <tbody>
        <tr>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/third_party/unsplash/kitchen.jpg" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/colorful-diffuse/kitchen.png" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/cosmos1-diffusion-renderer/kitchen.jpg" />
                </figure>
            </td>
            <tr>
                <td colspan="3" style="text-align:center">
                    เอาเข้าจริง บางรูป Colorful Diffuse ก็สามารถลบเงาได้แนะ 
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   รูปภาพโดย <a href="https://unsplash.com/@marcingalusz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marcin Galusz</a> on <a href="https://unsplash.com/photos/silver-pot-on-top-of-induction-oven-Xq0lte4P7rQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </td>
            </tr>
        </tr>
    </tbody>
</table>

<div style="padding-top:5rem;"></div>


## จัดการที่มืดได้ดีมาก


<table class="table is-bordered">
    <thead>
        <th style="text-align:center">Input Image</th>
        <th style="text-align:center"><a href="https://yaksoy.github.io/ColorfulShading/" target="_blank">Colorful Diffuse</a></th>
        <th style="text-align:center"><a href="https://research.nvidia.com/labs/toronto-ai/DiffusionRenderer/" target="_blank">Cosmos1-Diffusion-Renderer</a></th>
    </thead>
    <tbody>
        <tr>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/third_party/unsplash/operating_room.jpg" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/colorful-diffuse/operating_room.png" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/cosmos1-diffusion-renderer/operating_room.jpg" />
                </figure>
            </td>
            <tr>
                <td colspan="3" style="text-align:center">
                    พื้นที่นอกแสง ที่เกือบมืดไปจนมองไม่เห็น ปรากฏว่า Diffusion Renderer สามารถดึงสีกลับมาได้
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   รูปภาพโดย <a href="https://unsplash.com/@amitgaur?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Amit Gaur</a> on <a href="https://unsplash.com/photos/man-in-green-long-sleeve-shirt-sitting-beside-man-in-white-long-sleeve-shirt-YSbvqo9YLHA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </td>
            </tr>
        </tr>
    </tbody>
</table>

<div style="padding-top:5rem;"></div>

## แต่สีในบางจุดก็ทำได้ไม่ดี

<table class="table is-bordered">
    <thead>
        <th style="text-align:center">Input Image</th>
        <th style="text-align:center"><a href="https://yaksoy.github.io/ColorfulShading/" target="_blank">Colorful Diffuse</a></th>
        <th style="text-align:center"><a href="https://research.nvidia.com/labs/toronto-ai/DiffusionRenderer/" target="_blank">Cosmos1-Diffusion-Renderer</a></th>
    </thead>
    <tbody>
        <tr>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/third_party/unsplash/buddhist.jpg" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/colorful-diffuse/buddhist.png" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/cosmos1-diffusion-renderer/buddhist.jpg" />
                </figure>
            </td>
            <tr>
                <td colspan="3" style="text-align:center">
                    กำแพงควรจะเป็นสีขาว แต่กลับเป็นสีดำซะได้ 
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   รูปภาพโดย <a href="https://unsplash.com/@capturelight?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">John Thomas</a> on <a href="https://unsplash.com/photos/statues-KDgylqBhijE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </td>
            </tr>
        </tr>
    </tbody>
</table>


<table class="table is-bordered">
    <thead>
        <th style="text-align:center">Input Image</th>
        <th style="text-align:center"><a href="https://yaksoy.github.io/ColorfulShading/" target="_blank">Colorful Diffuse</a></th>
        <th style="text-align:center"><a href="https://research.nvidia.com/labs/toronto-ai/DiffusionRenderer/" target="_blank">Cosmos1-Diffusion-Renderer</a></th>
    </thead>
    <tbody>
        <tr>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/third_party/unsplash/inside_train.jpg" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/colorful-diffuse/inside_train.png" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/cosmos1-diffusion-renderer/inside_train.jpg" />
                </figure>
            </td>
            <tr>
                <td colspan="3" style="text-align:center">
                    แผงหน้ารถไฟควรจะเป็นสีฟ้า แต่ดันเป็นสีเทา
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   รูปภาพโดย <a href="https://unsplash.com/@jameshca?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chean Ang Heng</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-machine-with-a-clock-on-it-zNkbf-tSN28?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </td>
            </tr>
        </tr>
    </tbody>
</table>

<div style="padding-top:5rem;"></div>

## รายละเอียดเล็กๆ ก็ทำได้ไม่ดี

<table class="table is-bordered">
    <thead>
        <th style="text-align:center">Input Image</th>
        <th style="text-align:center"><a href="https://yaksoy.github.io/ColorfulShading/" target="_blank">Colorful Diffuse</a></th>
        <th style="text-align:center"><a href="https://research.nvidia.com/labs/toronto-ai/DiffusionRenderer/" target="_blank">Cosmos1-Diffusion-Renderer</a></th>
    </thead>
    <tbody>
        <tr>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/third_party/unsplash/light_mist.jpg" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/colorful-diffuse/light_mist.png" />
                </figure>
            </td>
            <td>
                <figure class="image " style="max-width: 500px;">
                    <img loading="lazy" src="https://pureexe.github.io/try-albedo-in-the-wild/results/cosmos1-diffusion-renderer/light_mist.jpg" />
                </figure>
            </td>
            <tr>
                <td colspan="3" style="text-align:center">
                     ตาผู้หญิงหายไปแล้ว 
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   รูปภาพโดย <a href="https://unsplash.com/@color0911?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Charles Chen</a> on <a href="https://unsplash.com/photos/a-person-in-a-white-dress-S5KNcbZvDTo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </td>
            </tr>
        </tr>
    </tbody>
</table>

<div style="padding-top:5rem;"></div>

## รูปเพิ่มเติม

ยังมีอีกกว่า  150+  รูป จาก  unsplash ที่ได้ลองรันทิ้งไว้ สามารถเข้าไปดูได้ที่ [หน้านี้](https://pureexe.github.io/try-albedo-in-the-wild/) หรือจะไปที่ [github repo](https://github.com/pureexe/try-albedo-in-the-wild) เพื่อนำรูปมาลองกับงานที่ออกใหม่ในอนาคต

<div style="text-align:center;">
<a class="button is-large" target="_blank" href="https://github.com/pureexe/try-albedo-in-the-wild">
     <span class="icon" style="padding-right:2rem;padding-left:2rem;"><i class="fa fa-github"></i></span> pureexe/try-albedo-in-the-wild
</a>
</div>