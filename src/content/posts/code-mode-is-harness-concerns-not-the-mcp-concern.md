---
unlisted: true
title: code-mode is harness concerns not the MCP concern
---

recently i came across this experimentation harness concept which is agent which has given just `execute` tool and inside it it is basically a repel like environment where it can write script to call tools, batch them, compose them, chain them one after another anything

​

basically a raw tools from coding harness which exposes the tools like `read`, `write`, `edit` or `apply_patch`,  and `bash` or `exec_command` becomes usable but through writing mini programs i.e all of this can be async or sync

​

it's really cool idea but can't be sure these model can adopts
<br />

so to investigate more into this i tried to think from model's POV, how many abstractions is good for em to feel productive to drive agent loop forward and get user's request done

​

MCP is quite standardize now in every agent harness including chatgpt, claude, openclaw, hermes literally every agent, they all have implemented the tool search and tool execution tool i.e. instead of exposing all tools at once model needs one more step in b/w to find out relevant tools

​

​
