---
title: Promise.all()
---

## Promise.all()

语法：`Promise.all(iterable)`。

`Promise.all(iterable)` 方法返回一个 Promise 实例，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果。

`Promise.all` 等待所有都完成（或第一个失败）。

### 全部成功

当全部成功时，会依次等待返回结果。

```js
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); 
});
// [3, 1337, "foo"] 
```

### 有失败

`Promise.all` 在任意一个传入的 promise 失败时返回失败。例如，如果你传入的 promise中，有四个 promise 在一定的时间之后调用成功函数，有一个立即调用失败函数，那么 Promise.all 将立即变为失败。

```js
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo');
}); 
const p4 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, 'foo1');
}); 

Promise.all([p1, p2, p3, p4]).then(values => { 
  console.log(values); 
});
// Uncaught (in promise) foo1
```