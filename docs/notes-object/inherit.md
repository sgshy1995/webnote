---
title: 继承
---

## 基于 原型 的继承

浏览器中的对象都有 `__proto__` 属性，指向生成该对象的构造函数的原型。构造函数具有 `prototype` 属性，指向该构造函数的原型。

`对象.__proto__ === 构造函数.prototype`。

也就是说该对象继承了它的构造函数的原型中的属性。由于所有的实例对象共享同一个prototype对象，那么从外界看起来，prototype对象就好像是实例对象的原型，而实例对象则好像"继承"了prototype对象一样。

这就是 Javascript 基于原型的继承机制的设计思想。

```js
function Parent(name1) {
    this.name1 = name1
}
Parent.prototype.consoleMethod = function () {
    console.log(this.name1)
}

function Child(name2, name1) {
    Parent.call(this, name1)
    this.name2 = name2
}
Child.prototype.__proto__ = Parent.prototype
Child.prototype.consoleMethod = function () {
    console.log(this.name2)
}
```

## 基于 Class 的继承

Class 可以通过extends关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。

```js
class Parent{
    constructor(name1){
        this.name1 = name1
    }
    consoleMethod(){
        console.log(this.name1)
    }
}

class Child extends Parent{
    constructor(name2, name1){
        super(name1) 
        this.name2 = name2
    }
    consoleMethod(){
        console.log(this.name2)
    }
}
```

上面代码中，子类 Two 的构造函数之中的 `super()`，代表调用父类的构造函数。这是必须的，否则 JavaScript 引擎会报错。