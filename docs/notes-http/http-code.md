---
title: 常见状态码
---

## HTTP 状态码

常见的状态码：

- 状态码100：

Continue。继续。客户端应继续其请求。

- 状态码200：

OK。响应成功。一般用于GET请求与POST响应。

- 状态码400：

Bad Request。客户端请求的语法错误，服务器无法理解。

- 状态码401：

Unauthorized。请求要求用户的身份认证。

- 状态码403：

Forbidden。服务器理解请求客户端的请求，但是拒绝执行此请求。

- 状态码404：

Not Found。服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面。

- 状态码407：

Proxy Authentication Required。请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权。

- 状态码408：

Request Time-out。服务器等待客户端发送的请求时间过长，超时。

- 状态码414：

Request-URI Too Large。请求的URI过长（URI通常为网址），服务器无法处理。

- 状态码500：

Internal Server Error。服务器内部错误，无法完成请求。