---
title: Object.defineProperty()用法
---

## 前言

该方法是ES5的语法，只能在对象上使用，不能用于数组。

作用是给对象新定义一个属性，或者修改一个对象的现有方法，并返回这个对象。

## 语法

```js
Object.defineProperty(obj, prop, descriptor)
```

参数说明：

- obj: 目标对象，必需。

- prop: 需修改或者定义的属性名，必需。

- descriptor: 目标属性所拥有的特性或值，必需。

## descriptor详解

- value: 可以任意类型的值。默认为 undefined。

- enumerable: 是否可以枚举（for...in和Object.keys()）。默认为false，不可枚举。

- writable: 是否可以被重写。默认为false，不可重写。

- configurable: 是否可以删除目标属性或再次更改特性。默认为false，不可。

- get(){} 当获取值得时候触发函数

- set(){} 当设置的值改变时触发函数，接受一个val参数，为新值。

**当使用`getter`和`setter`时，`value`和`writable`不可用。**

## 使用示例

```js
let person = {}; 
Object.defineProperty(person, 'name', {   
    writable: true || false,   
    configurable: true || false,   
    enumerable: true || false,  
    value:'gjf' 
});
```

```js
let person = {};
let n = 'gjf';
Object.defineProperty(person, 'name', { 
    configurable: true,  
    enumerable: true, 
    get() {    
        //当获取值的时候触发的函数    
        return n  
    },  
    set(val) {    
        //当设置值的时候触发的函数,设置的新值通过参数val拿到    
        n = val;  
    }
});
console.log(person.name) //gjf
person.name = 'newGjf'
console.log(person.name) //newGif
```