---
title: "Week 5-6 Report: Slack webhook integration and Markdown Editor | GSoC'24 CircuitVerse"
pubDate: 2024-07-20
tags: [gsoc, rails, circuitverse, slack-integration, markdown-editor]
---

Due to illness, I had to slightly adjust my timeline after consulting with Tanmoy. We reorganized the project board, shifting the Slack integration task to week 5 and the basic Markdown editor implementation to week 6. This flexibility allowed me to maintain productivity while managing my health.

Week 5
======

PR: [https://github.com/CircuitVerse/CircuitVerse/pull/5005](https://github.com/CircuitVerse/CircuitVerse/pull/5005)

Our primary channel for formal communication is Slack, where users can discuss issues related to our simulator. Each contributor is also active on Slack. Therefore, it’s important to implement Slack integration so that whenever a new thread is created on the forum, the Slack community is notified.

Following Slack’s [official guide](https://api.slack.com/messaging/webhooks) and the [Noticed gem](https://github.com/excid3/noticed/tree/v1.6.0) documentation, I made some modifications to get the webhook working. Essentially, Slack provides a webhook to post messages to a specified pre-defined channel.

**Steps for it were as below:** 
1. Generate webhook url for specific channel  
2. POST request to webhook url for new message

Final result:
-------------

New forum Thread now trigger automatic notifications in our Slack channel, keeping our community informed and engaged.

<video width="100%" controls>
  <source src="https://blog.circuitverse.org/images/waishnav_deore/slack-notification.mp4" type="video/mp4">
</video>

Week 6
======

PR: [https://github.com/CircuitVerse/simple\_discussion/pull/26](https://github.com/CircuitVerse/simple_discussion/pull/26)

In Week 6, I started feeling better and recovered from my sickness. I was happy to take on a challenging task, especially since the previous week was relatively relaxed. I decided to work on the Markdown Editor feature, which involves a lot of complexity.

First, let me explain what this feature entails.

For drafting forum posts, it’s important to provide a UI for adding headings, links, circuits, videos, etc. This enhances the overall message drafting experience. There are several libraries that offer markdown editors with the ability to extend functionalities. We chose simplemde, which is based on the open-source project codemirror.

So, adding a simple markdown editor using this library is straightforward, right? Yes, it solves most of our problems. However, we plan to extend the markdown syntax by adding toolbar buttons for tagging users, embedding circuits, embedding YouTube videos, and more. Therefore, choosing the right library is crucial. Fortunately, after reviewing the documentation for simplemde, it meets our needs perfectly.

Final result:
-------------

**Client Side markdown Editor**

![](https://miro.medium.com/v2/resize:fit:700/1*sYev0G2w7kwzUcTH3KvurQ.png)

**Server Side rendered forum post**

![](https://miro.medium.com/v2/resize:fit:700/1*-xlt1vtx2OMQyPf3CZYZoQ.png)

Thanks for reading this so far and have good day. If you have any question or anything wants to share ping me on [twitter](https://x.com/wshxnv)!
