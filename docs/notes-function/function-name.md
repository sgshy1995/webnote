---
title: 函数的 name
---

## 关于几种函数的 name

### 关键字声明 具名函数

```js
function f {}
f.name
//'f'
```

### 匿名函数

```js
var f2 = function(){}
f2.name
//'f2'
```

### 使用变量声明具名函数

```js
var f3 = function f4(){}
f3.name
//'f4'
```

### window.Function 函数对象

```js
f5 = new Function('x','y','return x+y')
f5.name
//'anonymous'(匿名)
```

函数是一段可以反复调用的代码块（本质）
函数可以接受输入的参数，不同的参数会返回不同的值。
函数在内存中以字符串形式存储
