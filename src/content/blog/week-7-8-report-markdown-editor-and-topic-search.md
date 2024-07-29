---
title: "Week 7-8 Report: Markdown Editor and Topic Search | GSoC'24 CircuitVerse"
pubDate: 2024-07-28
tags: [gsoc, rails, circuitverse, language-filter, spam-filter, moderation-tools, spam-reports]
---

Over the past two weeks, I’ve been focused on enhancing the markdown editor by adding more buttons to the toolbar and implementing a topic search feature for the forum. Here’s a detailed overview of the progress made:

Week 7
======

PR: [https://github.com/CircuitVerse/simple\_discussion/pull/27](https://github.com/CircuitVerse/simple_discussion/pull/27)

This PR introduces three new buttons to the toolbar of the Markdown editor. These buttons are responsible for functionality of _embedding circuit_, _embedding video_ and _tagging user_ respectively.

To achieve this, we extended the markdown syntax for both client-side preview and server-side post rendering. For the client side, we used the `marked` library and some regex to extend the markdown syntax, while for the server side, we utilized the `redcarpet` gem.

```md
- [@(name)](link_to_user_profile)
- ![Video](youtube_link)
- ![Circuit](circuit_embeded_link)
```

**Final Results:**

![Embed CircuitVerse Circuit iframe in markdown](https://miro.medium.com/v2/resize:fit:630/0*AaPsKbcrZyW6kG3J)

![Embed video modal](https://miro.medium.com/v2/resize:fit:634/1*0K5Yw5oMIM4zsNlSwd41cQ.png)

![tagging user in markdown editor](https://miro.medium.com/v2/resize:fit:605/0*g_tGd4dpaY52ZLP-)

Week 8
======

PR: [https://github.com/CircuitVerse/simple\_discussion/pull/28](https://github.com/CircuitVerse/simple_discussion/pull/28)

This PR is currently in draft status as the implementation details are still being finalized. I was unable to meet with my project mentor, Aboobacker, last week, so we haven’t discussed it yet.

This feature is crucial to prevent users from filling our forum with similar questions and queries, as it will enable them to search across all forum threads. However, we don’t need highly advanced search indexing like ElasticSearch. After researching, we decided to use PostgreSQL’s full-text search capabilities.

Using the `pg_search` gem, the implementation is straightforward. The steps include:

*   Adding a new column in the `forum_thread` table to store `tsvector`
*   Implementing a search method on the model to allow access like `ForumThread.topic_search`

The challenge with this approach is that we are unsure if the host Rails application will use PostgreSQL, SQLite, or another database. To address this, I created two implementations of the `topic_search` method: one for Rails applications using PostgreSQL and another for databases like SQLite or MySQL.

**Final Results:** You can see in the image below, the basic search functionality for the forum thread is now working as intended.

![](https://miro.medium.com/v2/resize:fit:700/1*6wBCwiYdGWTXkgwQeOKVqw.png)

Finally, Thanks for reading this so far and have good day. If you have any question or anything wants to share ping me on [twitter](https://x.com/wshxnv)!
