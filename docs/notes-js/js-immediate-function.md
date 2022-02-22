---
title: 立即执行函数
---

## 什么是立即执行函数

1、声明一个匿名函数。

2、马上调用这个匿名函数。

```js
(function(){console.log('hi')})()
```

为什么要用括号括起来调用？

是为了兼容JS的语法。可以用多种方法实现调用：

```js
(function(){console.log('hi')})() // 一般情况
(function(){console.log('hi')} ()) // 括号整个括起来
!function(){console.log('hi')} () // 不在意值是多少，只想通过语法检查
+function(){console.log('hi')} ()
-function(){console.log('hi')} ()
~function(){console.log('hi')} ()
void function(){console.log('hi')} ()
new function(){console.log('hi')} ()
```

## 立即执行函数有什么用

只有一个作用：**创建独立的作用域**。在这个作用域内的变量，外界是访问不到的。

著名面试题：

```js
for (var i=0;i<6;i++){
    console.log('i',i)
}
// i 6 6 6 6 6 6

for (var i=0;i<6;i++){
    !function(ii){
        console.log(ii)
    }(i)
}
// i 0 1 2 3 4 5
```