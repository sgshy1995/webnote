---
title: 原型关系式
---

## 原型关系式

```js
var object = {}
object.__proto__ ===  Object.prototype  // 为 true

var fn = function(){}
fn.__proto__ === Function.prototype  // 为 true
fn.__proto__.__proto__ === Object.prototype // 为 true

var array = []
array.__proto__ === Array.prototype // 为 true
array.__proto__.__proto__ === Object.prototype // 为 true

Function.__proto__ === Function.prototype // 为 true
Array.__proto__ === Function.prototype // 为 true
Object.__proto__ === Function.prototype // 为 true

true.__proto__ === Boolean.prototype // 为 true

Function.prototype.__proto__ === null // 为 true
```