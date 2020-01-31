---
title: 面试必问 AJAX
---

## 什么是 AJAX

AJAX (Asynchronous JavaScript and XML)。

异步的 JavaScript 与 XML 技术，指的是一套综合了多项技术的浏览器端网页开发技术。

## 手写

```js
const xhr = new XMLHttpRequest()
xhr.open(method,url)
xhr.onload = ()=>{
	xhr.response
}
xhr.onerror = ()=>{}
xhr.send()
```

## 改用 `onreadystatechange` 事件

当你路径错误时，只是会进入后端服务器的错误路由，得到404的响应，并没有触发AJAX的onerror事件。

因为onerror并没有很好地匹配AJAX，因为AJAX是后发明的。

```js
getCSS.onclick = function () {
    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }
    }
    request.open('GET', '/css')
    request.send()
}
```

## 使用 `XMLHttpRequest.readyState`

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| 0 | UNSENT | 代理被创建，但尚未调用 `open()` 方法。 |
| 1 | OPENED      |   `open()` 方法已经被调用。 |
| 2 | HEADERS_RECEIVED      |    `send()` 方法已经被调用，并且头部和状态已经可获得。 |
| 3 | LOADING      |    下载中； `responseText` 属性已经包含部分数据。 |
| 4 | DONE      |    下载操作已完成。数据传输已经彻底完成或失败。 |

## 监听 `status` 状态码

如何得知是否成功？监听 `status` 状态码： `200<=request.status<300`。

## 没有 JSON 之前都是 XML

没有 JSON 之前，都是用 XML，有一个API `request.responseXML`。

标准格式：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
         Hello World
    </warning>
</message>
```