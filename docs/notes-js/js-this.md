---
title: JS 中的 this
---

## this

this是js的关键字之一。它是对象自动生成的一个内部对象，只能在对象内部使用。随着函数使用场合的不同，this的值会发生变化。

- 一般都是讨论在对象中的 `this`，只在对象内部使用。
- `this` 指向什么，取决于什么地方以什么方式调用，而不是创建时。

## this 绑定规则

this 有四种绑定规则。

### 默认绑定

```js
function foo(){
    var a = 1;
    console.log(this.a);
}
var a = 10;
foo()
// 也就是 window.a
// 10
```

函数 `foo` 在调用时没有指定this，就是默认绑定。

**默认绑定到 `window`，严格模式下是 `undefined`。**

### 隐式绑定

```js
function foo(){
    console.log(this.a)
}
var obj = {
    a: 10,
    foo: foo
}
obj.foo()
// 也就是 obj.a
// 10
```

上面的函数 `foo` 再调用执行时，有了上下文对象，即 `obj`。这种情况下，函数里的this默认绑定为上下文对象，就是 `obj`。

这种叫做**this的隐式绑定**。

还可能存在**隐式丢失**：

被隐式绑定的函数会丢失其绑定对象而应用默认绑定，从而将this绑定到全局作用域或者undefined。

```js
function foo(){
    console.log(this.a)
}
var obj = {
    a: 10,
    foo: foo
}
var fox = obj.foo()
fox()
// fox 是 obj.foo 的引用，其实就是 foo 的引用，调用时又引用了默认绑定。
// 10
```

所以这也是隐式绑定的一个限制，就是上下文必须包含我们的函数，否则可能会发生隐式丢失。

### 显式绑定

可以使用 `call`，`apply` 和 `bind` 来改变函数的this指向，第一个参数都是设置this的指向。

- `call()` 从第二个参数开始都是原函数的参数。

- `apply()` 只有两个参数，第二个参数是一个数组，代表原函数的参数列表。

- `bind()` 会返回一个绑定this的新函数，但是不会立即调用。

**如果第一个参数传入的是 `null` 或者 `undefined`，就会被忽略。**

```js
function foo(x){
    console.log(this.a);
    console.log(x);
}
var obj = {
    a : 10
}
foo.call(obj,9);
// 10
// 9
```

### new 绑定

js中的new一般作用是创建一个对象。js中用new修饰的函数就是构造函数，准确来说就是函数的构造调用，js也帮我们做了：

- 创建一个新的对象。

- 把这个对象的 `__proto__` 属性指向原函数的 `prototype` 属性。（即继承原函数的原型）

- 将这个新对象绑定到此函数的 this 上。

- 返回新对象，如果这个函数没有返回其他对象。

## this 绑定的优先级

new绑定 > 显式绑定 > 隐式绑定 > 默认绑定

## 总结

- new绑定

this绑定的就是新创建的对象，例如 `var bar = new foo()`，函数foo中的this就是一个叫foo的临时对象，并且把这个对象赋值给bar。

- 显式绑定

this绑定的是 `bind,call,apply` 的第一个参数。

- 隐式绑定

函数在某个上下文中被调用，函数的this绑定的就是执行的上下文。

- 其他都是默认绑定。

this就是window，严格模式下是undefined。

## 面试题技巧

都使用 `call` 来假想改造，比较容易看出 this 的指向。

```js
var obj = {
  foo: function(){
    console.log(this)
  }
}

var bar = obj.foo
obj.foo() // 转换为 obj.foo.call(obj)，this 就是 obj
bar()  // 转换为 bar.call() this 就是 undefined，浏览器会给你默认的 this，就是undefined
```

[] 语法

```js
function fn (){ console.log(this) }
var arr = [fn, fn2]
arr[0]() 
// arr.0.call(arr) 就是 arr
```

## 箭头函数

箭头函数实际上没有 this，相当于函数外面的 this。