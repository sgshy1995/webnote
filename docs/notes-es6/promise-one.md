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

## 关于 promise

promise 并不是前端发明，只是借鉴并总结为规范。Promise 是目前前端解决异步问题的统一方案。

`window.Promise` 是一个全局函数，可以用来构造 Promise 对象。使用 `return new Promise((resolve, reject)=> {})` 就可以构造一个 Promise 对象，构造出来的 Promise 对象含有一个 `.then()` 函数属性

## 关于 new Promise()

Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是 `resolve` 和 `reject`。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

任务成功的时候调用 `resolve`，失败的时候调用 `reject`。

`resolve` 函数的作用是，将Promise对象的状态从“未完成”变为“成功”，在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；`reject` 函数的作用是，将Promise对象的状态从“未完成”变为“失败”，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

Promise实例生成以后，可以用 `then` 方法分别指定 `resolved` 状态和 `rejected` 状态的回调函数。

也就是说，`resolve` 和 `reject` 并不是 `.then(succes, fail)` 里面的 `success` 和 `fail`，`resolve` 会去调用 `success`，`reject` 会去调用 `fail`。

## 链式操作

```js
xxx().then(success, fail).then(success, fail)
```