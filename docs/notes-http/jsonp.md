---
title: 面试必问之 JSONP
---

## 什么是 JSONP

JSONP (JSON with Padding) 是可用于解决主流浏览器的跨域数据访问的方法。

在请求方（前端-网页/浏览器）与响应方（后端-服务器）之间的一种沟通方法。

- 请求方创建 script，src 指向响应方，同时传一个查询参数 `?callback=x`
- 响应方根据查询参数callback，构造函数调用，把请求方需要的数据传入第一个参数做出响应。
- 浏览器接收到响应，就会执行` x.call(undefined, '请求的数据')`，这样请求方就就可以得到所需要的数据。

这个过程就是 JSONP。

## 举例

扣钱功能。

*index.html*

```html
<body>
    <h5>您的账户余额为：
        <span id="amount">&&&amount&&&</span>
        <span>元</span>
    </h5>
    <div>
        <button id="button">支付一元</button>
    </div>
</body>
```

*main.js*

```js
button.addEventListener('click', () => {
    $.ajax({
        url: "http://jack.com:8003/pay",
        dataType: "jsonp",
        success: function( response ) {
            if(response === 'success'){
            amount.innerText = amount.innerText - 1
            }
        }
    })
})
```

*server.js*

```js
// ...
else if (path === '/pay') {
    let amount = fs.readFileSync('./database', 'utf8')
    amount -= 1
    fs.writeFileSync('./database', amount)
    let callback = query.callback
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/javascript')
    response.write(`
      ${callback}.call(undefined, 'success')
    `)
    response.end()
}
```

## JSONP 为什么不支持 POST

1.JSONP 是通过动态创建 script 实现的。

2.动态创建 script 时只能用 get 不能用 post。