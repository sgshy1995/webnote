---
title: 手写 post 请求
---

## 面试

请写出一个 HTTP post 请求的内容，包括四部分。

其中：

第四部分的内容是 username=ff&password=123

第二部分必须含有 Content-Type 字段

请求的路径为 /path

## 书写

```http
1 POST /path HTTP/1.1
2 Host: localhost:8080
2 User-Agent: curl/7.54.0
2 Accept: */*
2 Content-Length: 24
2 Content-Type: application/x-www-form-urlencoded
3 
4 username=ff&password=123
```