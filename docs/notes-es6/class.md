---
title: 类 class
---

## 构造对象

生成实例对象的传统方法是通过构造函数。

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。

基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

## 构造函数 + prototype

```js
function Person(name,age) {
    this.name = name
    this.age = age
    Person.prototype.sayHi=function(){
        console.log('你好，我叫 '+this.name)
    }
}

let person = new Person('sgs', 18)
person.name === 'sgs' // true
person.age === 18 // true
person.sayHi() // 你好，我叫 sgs
```

## 使用 class 关键字

```js
class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    saiHi(){
        console.log('你好，我叫 '+this.name)
    }
}

let person = new Person('sgs', 18)
person.name === 'sgs' // true
person.age === 18 // true
person.sayHi() // 你好，我叫 sgs
```

## new X()

自动帮我们做了很多事情，这些事情包括：

- 自动创建一个空对象
- 自动将该空对象的原型指向 X.prototype（即将 X.prototype 保存的地址复制到空对象.__proto__ 里）
- 自动将空对象作为 this 来运行构造函数
- 自动 return this
