---
title: 代码块
---

## 代码块

ES6 新语法。

```js
{
  let a = 1
}
console.log(a)
//undefined
```

let 用域只在代码块中。

```js
let a = 2
{
  let a = 1
}
console.log(a)
//2
```

这些是ES6 2015年才出来的。