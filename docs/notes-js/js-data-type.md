---
title: JS中的数据类型和类型判断
---

## 两大类型

JavaScript是一种弱类型或者动态语言。

原始类型和引用类型。

## 原始类型

变量的值直接存在栈内存中，直接访问就可以取到值，一经确定不可修改（值本身不可修改）。

- 数字 number

- 字符串 string

- 布尔值 boolean

- undefined

undefined 表示未定义默认值。

```js
typeof undefined
// 'function'
```

- null

null 表示空值。

```js
typeof null
// 'object'
```

- bigInt

也是一个数值类型，可以用任意精度表示整数，可以安全地存储和操作大整数。BigInt是通过在末尾附加 `n` 或调用构造函数来创建的。

```js
const x = 2n ** 3n;
// 8n

const y = BigInt(3);
// 3n
```

- symbol

符号类型是ES6新定义的。符号类型是唯一的并且是不可修改的，并且也用它来作为 `Object.key` 的值。

## 引用类型

对象。

值存在栈内存和堆内存中，这个地址存放的是引用(理解为指针也可以)，也就是这个内存地址存放的是另外一个地址，用这个引用地址才能访问到真正的变量值，这里的变量值存放的是对象结构数据，属性和方法可能还要继续通过引用去访问。

- 标准对象

一个标准对象就是键和值之间的映射。键是一个字符串或symbol，值可以是任意类型的值。

- 函数

函数是一个附带可被调用功能的常规对象。

- 日期

Date  对象。

- 数组

数组是一种使用整数作为键属性和属性之间关联的常规对象。

## 判断类型

判断数据类型的常用方法和不同之处。

### typeof

`typeof` 的唯一目的就是检查数据类型，任何从 `Object` 派生出的结构类型，都会得到 `object`。

```js
typeof 3;
// 'number'

typeof true;
// 'boolean'

typeof '';
// 'string'

typeof null;
// 'object'

typeof new Function();
// 'function'

typeof undefined;
// 'undefined'

typeof [];
// 'object'

typeof new Date();
// 'object'

typeof new RegExp(); 
// 'object'
```

### instanceof

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。返回一个布尔值。

```js
[] instanceof Object;
// true Array.prototype.__proto__ === Object.prototype
[] instanceof Array;
// true
{} instanceof Object;
// true
new Function() instanceof Object;
// true Function.prototype.__proto__ === Object.prototype
new Function() instanceof Function;
// true
```

`instanceof` 不能用于原始数据类型。

```js
'hello' instanceof String;
// false
1 instanceof Number;
// false
true instanceof Boolean;
// false
```

### constructor

`consturctor` 属性的作用是，可以得知一个实例对象的构造函数。

```js
let a = {}
a.constructor;
// Object()

let b = new Function()
b.constructor;
// Function()
```

### Object.prototype.toString

`toString` 是 `Object` 原型对象上的一个方法，默认返回其调用者的具体类型，更严格的讲，是 `toString` 运行时 `this` 指向的数据类型。

返回格式为 `[object xxx]`，其中xxx是具体的数据类型。基本上所有的数据类型都可以用这个方法获取到。

```js
Object.prototype.toString.call('') // [object String]
Object.prototype.toString.call(0) // [object Number]
Object.prototype.toString.call(true) // [object Boolean]
Object.prototype.toString.call(undefined) // [object Undefined]
Object.prototype.toString.call(null) // [object Null]
Object.prototype.toString.call(new Function()) // [object Function]
Object.prototype.toString.call(new Date()) // [object Date]
Object.prototype.toString.call(new RegExp()) // [object RegExp]
Object.prototype.toString.call(new Error()) // [object Error]
Object.prototype.toString.call(document) // [object HTMLDocument]
Object.prototype.toString.call(window) // [object Window]
```

必须通过 `Object.prototype.toString.call()` 来获取，而不能直接 `xxx.toString()`。

因为从原型链角度上讲，所有对象最终指向都是 `Object.prototype`，过程中其他派生对象都有实现自己的 `toString` 方法，会终止原型链的查找。

### 总结

-  `typeof` 可以精准判断出原始类型，引用类型除了 `function` 外都是 `object`。

- 已知是引用类型的可以用 `instanceof` 或 `constructor` 来判断。

- `instanceof` 是基于原型链的。

- `constructor` 是基于class的。该属性易变，不可信赖，为了规范，在重写对象原型时一般都重新给 `constructor` 赋值，以保证实例对象的类型不被改写。

- `Object.prototype.toString()` 通用，但是很繁琐。