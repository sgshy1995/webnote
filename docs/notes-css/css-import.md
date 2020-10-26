---
title: CSS 的 link 和 import
---

## 区别

1. link 属于 html 标签，而 @import 是 CSS 语法。

2. 在页面加载的时候，link 会被同时加载，而 @import 引用的 CSS 会在页面加载完成后才会加载引用到的 CSS。

3. @import 只有在 ie5 以上才可以被识别，而 link 是 html 标签，不存在浏览器兼容问题。

4. link 引入样式的权重大于 @import 的引用（@import 是两引用的样式导入到当前页面中）。