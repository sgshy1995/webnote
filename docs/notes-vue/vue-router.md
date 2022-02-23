---
title: Vue-Router 的两种模式及原理
---

## 两种模式：`history` 和 `hash`

### 判断浏览器是否支持 `history`

`window.supportsPushState`

### `hash` 模式

默认为hash模式。

使用URL的hash来模拟一个完整的URL，当URL改变时，页面不会重新加载。hash（#）是URL的锚点，代表的是网页中的一个位置。

单单改变#后面的部分，浏览器只会滚动到相应位置，不会重新加载页面；也就是说hash出现在URL中，但不会包含在http请求路径中，所以他的改变不会重载页面；同时每一次更改hash，都会在浏览器里增加一个历史记录，使用前进或者后退就会回到不同的历史位置。

hash模式的原理是通过直接赋值`location.hash`或调用`window.location.replace`来修改hash值，触发更新，通过`hashchange事件`（检测#后面的hash的变化）监听浏览器的前进或后退，可以在`window`对象上监听这个事件。

### `history` 模式

由于 `hash` 模式会在URL中自带#，如果不想要很丑的hash，可以用 `history` 模式。

HTML5的 `history infterface` 中新增了 `pushState()` 和 `replaceState()` 方法，这两个方法应用于浏览器记录栈，提供了对历史记录修改的功能。只是他们执行修改时，虽然改变了URL（同源），但是不会发出请求。同时还有 `popstate` 事件。

history模式的原理是 `history.pushState()` 和 `history.replaceState()` 来改变URL并添加/替换到历史记录中，通过 `popstate` 事件监听浏览器的前进或后退，触发更新。

## 如何渲染 `router-view` 组件

1、通过`Vue.observable`在router实例上创建一个保存当前路由的监控对象current。

2、当浏览器地址变化的时候，修改监控对象current。

3、在router-view组件中监听监控对象current的变化，当current变化后，获取用户注册的相应component，并利用h函数将component渲染成vnodes，进而更新页面视图。

## 两种模式的区别

- hash只能改变 `#` 后面的值，而history可以随意设置`同源`的url。

- hash只能添加`字符串类`的数据，而history可以`通过API添加多种类型`的数据。

- hash变化才可加入历史记录，history可以相同的url重复加入history。

- hash无需后端配置且兼容性良好，而history需要配置index.html用于匹配不到资源的情况，一般需要配置404。