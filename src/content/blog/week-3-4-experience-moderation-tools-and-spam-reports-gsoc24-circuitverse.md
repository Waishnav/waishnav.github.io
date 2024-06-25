---
title: "Week 3-4 Experience: Moderation Tools and Spam Reports | GSoC'24 CircuitVerse"
pubDate: 2024-06-24
tags: [gsoc, rails, circuitverse, language-filter, spam-filter, moderation-tools, spam-reports]
---

These two weeks, my focus was on the fixing bugs and UI, adding new `moderation tool`and adding `report as spam` feature.

**Week 3**
==============

I worked on the [PR](https://github.com/CircuitVerse/simple_discussion/pull/24) , where I added the Language filters to let user know if they are posting absurd and inappropriate content in the community. I utilise the [LanguageFilter](https://github.com/chrisvfritz/language_filter) gem for implementing this. The implementation was straight forward, but I learned a new thing while implementing it. During Proposal drafting period, I implemented this feature in the controller level but handling this validation in controller adds too many lines of code for such simple thingy.

Now in the PR, you can see validation is done through active records helper i.e using`validate`

![](https://miro.medium.com/v2/resize:fit:700/1*qQIAGLqKTQyCLBinj-GH_g.png)

Errors are attached with the record object. so in the view file of our form for adding new forum post or forum threads we can render the error messages.

**Final result:**

![](https://miro.medium.com/v2/resize:fit:700/0*ej9b6iEiESVmpINm)

**UI fixes**:

In the week 3, I also worked on improving UI and UX of forum. you can checkout following screenshots.

![](https://miro.medium.com/v2/resize:fit:700/1*a0NHEHEwOAZPdCcAHgfOsg.png)

![](https://miro.medium.com/v2/resize:fit:700/1*072tYai23WERcvGZK8LCGg.png)

Dropdown action bar change was needed cause before, these`action` buttons were separated across the forum post card.  
I also added `Jump to Solution` button for users to quickly read the solution instead of going through whole thread.

**Week 4**
==============

This week was full of challenges cause I have to implement one of the major features which is **Moderation tools with Spam reporting.**

You can checkout the week 4 [PR](https://github.com/CircuitVerse/simple_discussion/pull/25) here for reference.  
Before going forward let met tell you the brief of the implementation.  
Currently database for forum is designed like this, there are 4 tables named **_forum\_threads_**, **_forum\_posts_**, **_forum\_categories_**, **_forum\_subscription._**

![](https://miro.medium.com/v2/resize:fit:700/1*8P6Uo73ZKwhLggHxGwGigQ.png)

so you might have wondering why there is no forum thread body field right? well answer is for each forum thread, first forum post is its body, so we don’t need another field in this table.

Well then, for designing the db for spam reports, we got to have another table right? Well yes you can look below and get the understanding of gist of implementation.

![](https://miro.medium.com/v2/resize:fit:700/1*Bft3Yez1ZxUTsH7QVEX7uQ.png)

Action record is very good ORM, which has supports for feature like enums, these enums let us saves the space in db and letting us define the map of the values in runtime in our backend rails app. But it comes up with tradeoffs that we can’t changes this enum object very often cause it directly reflects the meaning of previously filled reason in the db. But our usecase was not to change this often so it fits perfectly for such case.

If there would have no enums, I had gone with the option to store the reasons in another table and have reference this reason in `spam_reports` table.

Later on implementation was farely simple as it involved only few CRUD routes for reporting and viewing the spam reports in moderator’s dashboard.

**Final Results:**

![](https://miro.medium.com/v2/resize:fit:700/0*Ix8I9B-6n1Jq5yiM)

![](https://miro.medium.com/v2/resize:fit:700/0*TnJ40fxIZEZxNtTt)

Finally, Thanks for reading this so far and have good day 😃 If you have any question or anything wants to share ping me on [twitter](https://x.com/wshxnv)!
