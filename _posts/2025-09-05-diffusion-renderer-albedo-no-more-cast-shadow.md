---
layout: post
title: Cosmos1-diffusion-renderer handle cast shadow well in albedo
date: '2025-09-05T13:55:06.000+07:00'
author: Pakkapon Phongthawee
lang: en
tags:
- research
thumbnail: /assets/images/thumbnail/diffusion-renderer-albedo-no-more-cast-shadow.jpg
modified_time: '2025-09-05T13:55:06.000+07:00'
---

We are looking to obtain albedo from an image. One problem that concern us a lot is the cast shadow. We found that [Cosmos1-diffusion-renderer](https://research.nvidia.com/labs/toronto-ai/DiffusionRenderer/) can remove cast shadow from the image really well. 

<a class="button is-fullwidth" href="/2025/09/diffusion-renderer-albedo-no-more-cast-shadow-th">
โพสนี้มีภาษาไทย | This post available in Thai 
</a>


We will show image obtain from [Unsplash.com](https://unsplash.com/). We also add the comparision with [Coloful Diffuse](https://yaksoy.github.io/ColorfulShading/) which are previous stage-of-the-art work.

## Cast shadow removal

We will show a bunch of image that have cast shadow on the image.

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
                    Notice how good the shadow under the hand as remove
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                    Photo by <a href="https://unsplash.com/@graciadharmaa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gracia Dharma</a> on <a href="https://unsplash.com/photos/woman-in-black-shirt-taking-selfie-qTlbO6mkQH0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
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
                    The shadow on the floor was removed completely.
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   Photo by <a href="https://unsplash.com/@sp3v?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Spencer Everett</a> on <a href="https://unsplash.com/photos/re-beetle-beside-coconut-trees-DdVOCPTofFc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
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
                    Even this one nice to remove the cast shadow but it stuggle to remove len flare (near the bottom-left side of the car )
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   Photo by <a href="https://unsplash.com/@introspectivedsgn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Erik Mclean</a> on <a href="https://unsplash.com/photos/silver-sports-coupe-on-asphalt-road-ZRns2R5azu0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
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
                    To be fair, Sometime Colorful Diffuse can remove cast shadow as well
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   Photo by <a href="https://unsplash.com/@marcingalusz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marcin Galusz</a> on <a href="https://unsplash.com/photos/silver-pot-on-top-of-induction-oven-Xq0lte4P7rQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </td>
            </tr>
        </tr>
    </tbody>
</table>

<div style="padding-top:5rem;"></div>


## Handle dark region well 


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
                    Area outside the light almost invisible but it Diffusion Renderer can recover it back
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   Photo by <a href="https://unsplash.com/@amitgaur?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Amit Gaur</a> on <a href="https://unsplash.com/photos/man-in-green-long-sleeve-shirt-sitting-beside-man-in-white-long-sleeve-shirt-YSbvqo9YLHA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </td>
            </tr>
        </tr>
    </tbody>
</table>

<div style="padding-top:5rem;"></div>

## Sometimes color is unreliable 

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
                    The wall should be white color, but it produce a black color.
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   Photo by <a href="https://unsplash.com/@capturelight?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">John Thomas</a> on <a href="https://unsplash.com/photos/statues-KDgylqBhijE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
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
                    Train console become gray but i believe it should be blue.
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   Photo by <a href="https://unsplash.com/@jameshca?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chean Ang Heng</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-machine-with-a-clock-on-it-zNkbf-tSN28?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </td>
            </tr>
        </tr>
    </tbody>
</table>

<div style="padding-top:5rem;"></div>

## Small detail sometimes unreliable

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
                     woman eyes are gone
                </td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center">
                   Photo by <a href="https://unsplash.com/@color0911?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Charles Chen</a> on <a href="https://unsplash.com/photos/a-person-in-a-white-dress-S5KNcbZvDTo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </td>
            </tr>
        </tr>
    </tbody>
</table>

<div style="padding-top:5rem;"></div>

## More images

We ran over 150+ in-the-wild image from unsplash. you can inspect it closely at [this page](https://pureexe.github.io/try-albedo-in-the-wild/) or go to the [github repo](https://github.com/pureexe/try-albedo-in-the-wild) to obtain the image to on newer work publish in the future.

<div style="text-align:center;">
<a class="button is-large" target="_blank" href="https://github.com/pureexe/try-albedo-in-the-wild">
     <span class="icon" style="padding-right:2rem;padding-left:2rem;"><i class="fa fa-github"></i></span> pureexe/try-albedo-in-the-wild
</a>
</div>