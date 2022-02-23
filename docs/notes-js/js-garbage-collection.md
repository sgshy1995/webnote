---
title: JS中的垃圾回收
---

## 什么是垃圾？

不再被需要的变量就是垃圾。

### 局部变量

比如函数中声明的变量，在函数执行时创建，但是函数退出后就会回收。

```js
function x(){
    let b = 1
    console.log(b)
}
```

### window上的变量

- 单引用

```
let user = {
    name: 'sgs'
}
user = null
```

之前开辟出的内存地址就变成了垃圾，因为没有变量指向这个地址了。

- 双引用

```
let user = {
    name :'sgs'
}
let admin = user

user = null
admin = null
```

只有把这两个都去除，这个变量才会变成垃圾，因为有两个变量指向这个地址。

- 环引用

```js
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});
```

这样的情况下，我们去除掉father或者husband其中一个，都不会产生垃圾，因为还存在能够引用John的变量

只有同时删除两者，才会将john变成垃圾

更恐怖的情况，直接让他们全家升天

## 总结

js中的垃圾有哪些？

- 1、全局变量： 全局变量存在被使用的可能性，所以不能当做垃圾

- 2、局部变量：函数执行完了变量当做垃圾清除

- 3、单引用，双引用，环引用，这三种情况下，只有将所有指向该变量的对象清除才能够将该变量作为垃圾处理