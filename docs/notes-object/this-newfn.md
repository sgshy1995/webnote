---
title: this 之 new Fn()
---

## 面试题

```js
function Fn(){
    console.log(this)
}
new Fn()
```

new Fn() 会执行 Fn，并打印出 this，请问这个 this 有哪些属性？这个 this 的原型有哪些属性？

## 回答

this的属性为空，只有一个隐藏的 `__proto__` 属性。

this的原型是 `Fn.prototype` ，只有一个属性： `constructor:  Fn()`。

还有一个隐藏属性：`__proto__: Object`。