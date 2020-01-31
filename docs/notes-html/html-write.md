---
title: 手写 HTML
---

## 面试题

请写出一个符合 W3C 规范的 HTML 文件，要求

- 页面标题为「我的页面」
- 页面中引入了一个外部 CSS 文件，文件路径为 /style.css
- 页面中引入了另一个外部 CSS 文件，路径为 /print.css，该文件仅在打印时生效
- 页面中引入了另一个外部 CSS 文件，路径为 /mobile.css，该文件仅在设备宽度小于 500 像素时生效
- 页面中引入了一个外部 JS 文件，路径为 /main.js
- 页面中引入了一个外部 JS 文件，路径为 /gbk.js，文件编码为 GBK
- 页面中有一个 SVG 标签，SVG 里面有一个直径为 100 像素的圆圈，颜色随意

注意题目中的路径。

## 手写

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="./print.css" media="print">
    <link rel="stylesheet" href="./mobile.css" media="(max-width: 500px)">
    <title>我的页面</title>
</head>
<body>
    <svg><circle cx="100" cy="100" r="50" stroke="black" fill="black" /></svg>
</body>
<script src="./main.js"></script>
<script src="./gbk.js" charset="GBK"></script>
</html>
```