---
title: JS中的for...in和for...of
---

先说结论。

- 1、推荐在循环对象的时候使用`for...in`，在循环数组的时候使用`for...of`。

- 2、`for...in`遍历的是key，`for...of`遍历的是value。

- 3、注意，`for...of` 是ES6新引入的特性，弥补了前者的不足。

- 4、`for...of` 不能遍历普通的对象，需要通过和`Object.keys()`使用。