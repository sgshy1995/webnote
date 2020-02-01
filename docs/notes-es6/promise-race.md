---
title: Promise.race()
---

## Promise.race()

`Promise.race(iterable)` 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。

race 函数返回一个 Promise，它将与第一个传递的 promise 相同的完成方式被完成。它可以是完成（ resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。

## 全部成功

即使全部成功，返回结果也是完成较快的 promise2。

```js
const promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
});
// 'two' 
```

## 有失败

有失败，当失败的 promise2 较快:

```js
const promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise(function(resolve, reject) {
    setTimeout(reject, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
});
// Uncaught (in promise) 'two'
```

有失败，当成功的的 promise1 较快:

```js
const promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'one');
});

const promise2 = new Promise(function(resolve, reject) {
    setTimeout(reject, 500, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
});
// 'one'
```