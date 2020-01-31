---
title: call、apply、bind 的用法
---

## 函数常见方法

call、apply、bind 的用法是什么？

### fn.call()

call用法就是函数的调用方式，指定上下文的this。

```js
fn('a','b') === fn.call(undefined,'a','b')

fn.call(this,arguments)
```

this就是fn.call传入的第一个参数，arguments是后面传入的参数（多个）。

在标准模式下，不使用call方法时，this的值是undefined，但是浏览器会自动将其变成window。

### fn.apply()

apply的作用和 call 基本一样，只是在调用的时候，接受arguments参数的方式不同。apply 接受的是数组参数。

```js
fn.call(fn,'a','b') === fn.apply(fn,['a','b'])
```

### fn.bind()

bind 接受的参数跟 call 一致，只是 bind 不会立即调用，它会生成一个新的函数。

```js
function fn(x, y) {
    console.log(this)
    console.log(a)
    console.log(b)
}

newFn = fn.bind('a', 1, 2)
newFn() //'a', 1, 2

newFn = fn.bind('b', 3)
newFn() //'b', 3

newFn = fn.bind('c')
newFn() //'c'

newFn = fn.bind()
newFn() //window, undefined, undefined 
```