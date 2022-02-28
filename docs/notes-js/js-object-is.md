---
title: Object.is()用法
---

在ES6中，`Object.is()`类似于`===`，但判断了`NaN`、`-0`和`+0`。

保证`-0`和`+0`不相等，但`NaN`和`NaN`是相等的。

下面情况会认为是相等：

```text
两个值都是 undefined
两个值都是 null
两个值都是 true 或者 false
两个值是由相同个数的字符按照相同的顺序组成的字符串
两个值指向同一个对象
两个值都是数字并且
都是正零 +0
都是负零 -0
都是 NaN
都是除零和 NaN 外的其它同一个数字
```

这种相等性的判断和传统的`==`不同，`==`运算符会对它两边的操作数做隐式的类型转换（如果他们是不同类型的值的话），然后才进行相等性比较，但 `Object.is()`不会。

```js
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var test = { a: 1 };
Object.is(test, test);       // true

var test = { a: 1 };
var test1 = test
Object.is(test, test1);       // true

Object.is(null, null);       // true

// 两个特例，=== 也没法判断的情况
Object.is(0, -0);            // false
Object.is(NaN, 0/0);         // true
```