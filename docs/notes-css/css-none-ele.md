---
title: CSS 隐藏元素
---

## 方式

1. Opacity

元素本身依然占据他的位置并且会影响页面布局，也会影响页面交互。

2. Visibility

与 opacity 唯一的区别是不会影响任何用户交互。此外，元素在读屏软件中也会隐藏。

3. Display

display 设为 none 任何对该元素直接打用户交互操作都不可能生效。此外，读屏软件也不会读到元素的内容。这种方式产生的效果就像元素完全不存在。

4. Position

不会影响布局，能让元素保持可以操作。

5. Clip-path

clip-path 属性还没有在 IE 或者 Edge 下被完全支持。如果要在你的 clip-path 中使用外部的 SVG 文件，浏览器支持度还要低。