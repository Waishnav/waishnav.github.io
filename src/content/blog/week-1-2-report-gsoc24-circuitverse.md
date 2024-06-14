---
title: Week 1 and 2 Report- GSoC'24 CircuitVerse
pubDate: 2024-06-10
tags: [gsoc, circuitverse, google-summer-of-code, ruby, rails, open-source, rails-engine]
---

![](https://miro.medium.com/v2/resize:fit:700/0*eU_y_ELIJd7IfHfA.png)

Alright!! Week 1–2 was pretty fun and interesting in a way I had to work on new stuff which I was not aware of few!

This two weeks was for setting up the project i.e setting up development environment and testing environment so that I can have good DX while working on this project!

![](https://miro.medium.com/v2/resize:fit:700/1*PEQey_eMVQVLJprYo5M57Q.png)

**LSP Setup:**
==============

In this two weeks, I worked on two PRs, which leading me to understand the benifits of LSP — Language Server Protocal setup in your text editor i.e NeoVim, VSCode etc

Ruby is dynamically typed language, so there are two major option for ruby development:

1.  RubyLSP — developed and maintain by Spotify
2.  Solargraph — maintained by open source community

I initially setuped with Solargraph, but after talking to my project mentor Aboobacker, he suggested RubyLSP since it will be getting part of rails in future and it is being actively developed by shopify team.

Also Solargraph has extra support for Yard Docs, if I had gone with this option then I had to write documentation of the each `class` and `module` obeve it, so that editor will know about it through LSP.

Even though, I read few cotoomments on stackoverflow and github about solargraph not being accurate for `go to defination`

**Test Environment and CI fails:**
==================================

So while working on writing `gem`, it is very important for testing it against the environment where it is being used in production. In our case, gem is rails engine, So we have to test it against different Rails version.

Currently in the `simple_discussion` gem, Appraisal is being used to perform such test, these test are very important since it help us understand where the gem might fail.

Initially I underestimated this task, since it was fairly simple — just to add new rails 7 in Appraisal file for testing. As I started working on it. Test were failing, reason being in rails 7, `sprocket-rails` which manage assets, is added as separate package, before it was included in the rails itself.

Later on I test it for previous old rails version i.e rails 6 and 5.2 which were included in Appraisal file before, test were failing. I panicked and tried solving those error overnight one by one. Most of the error was coming from ruby version of required gems from gemfiles not matched with my local ruby version. So I had to switch to different ruby version to make test working. I switched to ruby 2.7 and 3.0.3 and 3.1.4

Errors were coming from `nakogiri`, `psych` , `sqlite3` with mismatched ruby version and their dependencies.

I solved most of them with the help of my mentor Tanmoy. But this all debugging session with myself as well as Tanmoy was unnecesarry. Cause those rails version i.e 5.2 and 6 is not even currently supported and maintained by rails team.

So after talking with Aboobacker, I removed old rails version tests from Appraisal file.

Followed, CI tests were also failing since for old rails version so I removed them.

These two week were fun with lots of time me being infront of my laptop, debugging through those tests fail error messages, tracing each and every error and searching across internet and reading through comments and reading through gemspec file of each gems we have! It was fun and learnt a lot of stuffs.

Upcoming week will be about implementable of Spam detection and Language filters to avoid hateful, abusive language in forum posts.  
Thanks for reading this so far! And stay tuned for upcoming blogs of my GSoC journey 😃
