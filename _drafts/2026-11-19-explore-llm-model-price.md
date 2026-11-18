---
title: สำรวจราคา LLM ยี่ห้อต่างๆ ที่น่าสนใจ
date: '2026-11-19T00:58:00.000+07:00'
thumbnail: ""
tags:
  - computer
---

ตอนนี้กำลังมองหา LLM ราคาถูกอยู่ เลยพยายามสำรวจหลายๆ เจ้าว่าราคาเท่าไร พยายามเรียงจากมากไปน้อย เพื่อจะได้เลือกใช้งานเองด้วย  โดย Tok/s จะมาจากประสบการณ์ที่เจอส่วนตัว โดยผมจะสนใจเป็นตัว flash หรือใกล้เคียงของแต่ละเจ้า เพราะต้องการความเร็วในการประมวลผล เพื่อคอยจับตาความผิดปกติต่างๆ ระหว่างรันการทดลอง (เครื่องดับ รันระเบิด) ถ้าต้องการความถูกต้อง อย่างการเขียน และทดสอบโค้ด ยังไงก็ต้องยอมจ่ายแพงเพื่อใช้ตัวท็อปจริงๆ  (ส่วนตัวตอนนี้ใช้ claude)




### First party provider
| Model                          | Provider                                                                    | Tok/s     | Input     | Cache     | Output    | 
|--------------------------------|-----------------------------------------------------------------------------|-----------|-----------|-----------| --------- |
| Muse Spark 1.3 Contributor     | [Meta.ai Developer](https://dev.meta.ai/models/muse-spark)                  |    800    |   0.1     |   0.002   |    0.2    |  
| Mimo-v2.6-flash                | [Xiaomi Mimo](Ihttps://mimo.mi.com/docs/en-US/price/pay-as-you-go)          |           |   0.15    |   0.003   |    0.3    |
| Qwen3.5-Flash                  | [Qwen Cloud](https://qwencloud.com)                                         |           |   0.1     |   0.01    |    0.4    |
| Qwen3.8-Flash                  | [Qwen Cloud](https://qwencloud.com)                                         |           |   0.15    |   0.016   |    0.47   |
| GPT-6-Luna                     | [OpenAI Developer](https://developers.openai.com/api/docs/pricing)          |           |   0.1     |   0.01    |    0.5    |
| GLM-5.3-flash                  | [Z.ai](https://z.ai)                                                        |           |   0.15    |   0.03    |    0.5    |
| DeepSeek v4.1 Flash (off-peak) | [DeepSeek Platform](https://platform.deepseek.com)                          |    200    |   0.15    |   0.003   |    0.6    |
| Gemini 3.1 Flash-lite          | [Google AI Studio](https://aistudio.google.com/docs/pricing)                |    500    |   0.125   |   0.00125 |    0.75   | 
| Gemini 3.5 Flash-lite          | [Google AI Studio](https://aistudio.google.com/docs/pricing)                |    500    |   0.15    |   0.02    |    1.25   |
| Haiku 5.5                      | [Claude Platform](https://platform.claude.com/docs/en/about-claude/pricing) |           |   0.5     |   0.05    |    2.5    |
| Currency: USD                  | Last updated:  Nov 19, 2026                                                 |           |           |           |           |


กลุ่มพ่อค้าคนกลาง (Thrid party provider)

| Model                    | Provider                                                           | Tok/s     | Input     | Cache     | Output    | 
|--------------------------|-------------------------------------------------------------------|------------|-----------|-----------| --------- |
| Nemotron 3.5 Lighting    | [DarkBloom](https://openrouter.ai/nvidia/nemotron-3.5-lightning)  |       | 0.02     |  0.0125     | 0.12      |
| Mimo-v2.6-flash          | [DarkBloom]()  |           |   0.15    |    0.003  |    0.3    |
| Qwen3.8-27b              | [DarkBloom]()   | | |
| GLM-5.3-flash              | [DarkBloom]()   | | |
| GLM-5.3                            | [Qwen Cloud](https://qwencloud.com)   |           |  1.4      | 0.26      | 4.4        |
| Kimi K3                            | [Qwen Cloud](https://qwencloud.com)   |           |  3     | 0.3      | 15        |

