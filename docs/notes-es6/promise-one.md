---
title: 面试 —— Promise
---

## 面试题

用过 Promise 吗？举例说明。
如果要你创建一个返回 Promise 对象的函数，你会怎么写？举例说明。

## 举例

用过 Promise，比如 jQuery 或者 axios 的 AJAX 功能，都返回的是 Promise 对象。

```js
$.ajax({url:'/xxx', method:'get'})
  .then(success1, error1).then(success2, error2)
```

## 自己写

如果我自己创建 Promise 对象，我会这么写：

```js
function asyncMethod(){
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            //成功则调用 resolve
            console.log(resolve)
            //失败则调用 reject
            console.log(reject)
        },3000)
    })
}
```

## 链式操作

```js
xxx().then(success, fail).then(success, fail)
```