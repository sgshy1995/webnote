---
title: CORS 跨域
---

## CORS

跨域资源共享(Cross-Origin Resource Sharing)。

只需后端设置响应头 `Access-Control-Allow-Origin` 即可。

### node.js

```js
response.setHeader('Access-Control-Allow-Origin','url+port')
```