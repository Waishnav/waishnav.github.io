---
title: i fixed codex design and frontend skill-issue?
---## back storyCouple of days ago i watch Theo's [video](https://www.youtube.com/watch?v=f2FnYRP5kC4) on best model at designing frontend. In the video he basically benchmark each and every SOTA model at the moment against same prompt!![](https://camo.githubusercontent.com/4a6307b7c1998323eadefa5a3b0ede9f5c4e0633130d7ea82b297315efe2cb40/68747470733a2f2f692e7974696d672e636f6d2f76692f6632466e595250356b43342f687164656661756c742e6a7067)one test was with frontend design skills and one without giving any design skills> Note: at the time gpt codex 5.3 or gpt 5.4 was not out so he did not included it in his testingHe used [frontend-design skills](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) written by Anthropic for improving their model's frontend skills and aligning it to not use generic slop decision in the UI like choosing colors, layout etc and we all know that skill works with opus/sonnet like crazy, that skill alone turns these non-deterministic LLM models into designers (somewhat)The key assumption theo took was this design skills written by Anthropic will be portable across all of the models built by other AI Labs​In december 2025, or starting of this year, tides have turned and no body now use one keystroke at a time to write code, all of us are not used to write prompt to let agents do work on the behalf of usand it's very addictive and very fun, it gives aha movement every time model one shot something that aligns with described prompt​so by the time, we all have known that our job has turned into context engineering i.e giving right context about the job and codebase to let agents thrive and get shit doneso it's our job to make things simpler for agents to align it for our needs and requirements​ever since gpt 5.3 codex was out, i've been using it all day experimenting with it related to it's capabilities and i've observed that both model is extremely good at instruction following and it takes certain words and sentences quite literally and it gets very annoying it sometime feels like dumb intern which we need to handhold and not to take it quite latterly instead fill the vibe (in b/w context related to task) compared with opus​but gpt model just sucks at design that's established fact right? right? naah that's what i thought, so if this model is good at instruction following but lacks design sense and taste what if we instruct the model through writing custom frontend design skills specifically for this model so that i can stop using too much text and bordered layouts, and contrasty glass colored UIs​so in hindsight, theo's benchmark was not correct he gave skills written by anthropic to other models,&#x20;
idea was to bring taste, design sense and certain matrix of decision that we can gave to model through custom skills and see how it performs
so to do this, i thought who understand gpt's behavour better than myself1) the researcher at openai (which i don't have access to em)
2) model itself maybe i thought, she is self aware and she can self heel her own behavior and write custom skillsand i knew gpt 5.3 codex is really works well if it has given task with self heeling closed loop like if we can give it environment where it can run experiments, write custom skills file and then spawn the codex instance against newly written skills and then validating whether it works or not and in b/w i'll be there giving human feedbacks in b/w​this is really cool and crazy idea which came into my head, idea about self improvement loop, it's totally experiment to understand models ability to instruct herself to tune or influence it's model weights in certain direction where we gets our results in our case frontend design ui as similar to opus or maybe improved than this (although i kept loop in such way gpt can chase opus and try to mimic opus's design taste and sense)you can checkout this repo and understand it's structure over here​<https://github.com/Waishnav/self-improvement-frontend-design-skill-loop-for-codex>​​so i first started around setting up the loop and bootstrapping the repository where codex can run experiment in workflow manner (predefined steps written in this skills)```auto
├── .agents
│   └── skills
│       └── frontend-design-improvements-loop
├── AGENTS.md
├── experiments
│   ├── \_archived
│   │   ├── README.md
│   │   ├── version-11
│   │   ├── version-12
│   │   ├── version-3
│   │   ├── version-4
│   │   ├── version-5
│   │   ├── version-6
│   │   ├── version-7
│   │   ├── version-8
│   │   └── version-9
│   ├── README.md
│   ├── version-1
│   │   ├── .agents
│   │   ├── CRITQUES.md
│   │   ├── README.md
│   │   ├── screenshots
│   │   └── t4-canvas
│   ├── version-2 (same structure as above version folder)
│   ├── version-13
│   ├── version-14
│   ├── version-15
│   ├── version-16
│   ├── version-17
│   ├── version-18
│   ├── version-19
│   ├── version-20
│   ├── version-21
│   ├── version-22
│   ├── version-23
│   ├── version-24
│   ├── version-25
│   ├── version-26
│   ├── version-27
│   └── version-28
├── .gitignore
├── prompt.md
├── README.md
├── research
│   ├── targetted-designs
│   │   ├── HBIXPfFakAQjXMD.jpeg
│   │   ├── screencapture-buzzclip-io-2026-02-15-00\_02\_19.png
│   │   ├── screencapture-entelligence-ai-2026-02-15-00\_01\_06.png
│   │   ├── screencapture-liveblocks-io-2026-02-15-00\_01\_55.png
│   │   └── screencapture-ramp-rewards-openai-2026-02-15-00\_01\_39.png
│   ├── theo\_moments.tsv
│   ├── theo-screenshots-2k                      ==> made codex do research by downloaing theo's video and my thesis so it did analysis and took screenshot from section from video
│   └── theo-screenshots-2k-clean                ==> cleaned up screenshots of theo's experiment (all done by codex)
│       ├── gemini3pro\_without\_skill
│       ├── gemini3pro\_with\_skill
│       ├── gemini\_iterations
│       ├── gpt52\_likely\_skill\_despite\_prompt
│       ├── gpt52\_with\_skill
│       ├── kimmyk25\_without\_skill
│       ├── kimmyk25\_with\_skill
│       ├── \_master\_contact.jpg
│       ├── opus45\_without\_skill
│       ├── opus45\_with\_skill
│       └── opus\_iterations
└── tmp
```1) with the freshly written skills open codex instance in `experiments/version-[x]/` with theo's prompt to run actual experiment in fresh context
2) &#x20;use `playwriter` skills to use existing browser and and go to `localhost:4000`and take screenshots of newly generated ui for `/1`, `/2`, `/3`, `/4` and `/5` (Theo's prompt included to output 5 design of same landing page) and save those screenshot files in our experiments folder as results which i can review it
3) &#x20;after that in the main orchestrate codex instance letting model critque the work done in that experiment by older codex instance (letting model free hand to understand whether that experiment succeeds or not)
4) using older experiment critique points, rewrite new frontend design skill for new experiment in `experiments/version-[x]/.agents/skills/frontend-design/SKILLS.md`
5) &#x20;and continue to next experiment if output are still not aligned or similar to opus​I think i'm bit crazy doing this experiment, and i regreted doing it so in it's early iteration prompt was leaking into it's output and there were lots of issues that i observered with the first version of this self improvement loop ​but later after iteration i figured out and![](https://github.com/Waishnav/self-improvement-frontend-design-skill-loop-for-codex/raw/main/experiments/version-18/screenshots/3/laptop.png)​![](https://github.com/Waishnav/self-improvement-frontend-design-skill-loop-for-codex/raw/main/experiments/version-23/screenshots/1/laptop.png)​![](https://github.com/Waishnav/self-improvement-frontend-design-skill-loop-for-codex/raw/main/experiments/version-23/screenshots/5/laptop.png)​
