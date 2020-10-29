---
title: HTML 中的 Meta Viewport
---

## 原理

移动端浏览器通常都会在一个比移动端屏幕更宽的虚拟窗口中渲染页面，这个虚拟窗口就是 viewport；目的是正常展示没有做移动端适配的页面，让他们完整的展示给用户。

## 作用

meta viewport 标签的作用是让当前 viewport 的宽度等于设备的宽度，同时不允许用户进行手动缩放。

## Viewport 属性值

- ***width*** 设置 layout viewport 的宽度，为一个正整数，或字符串 `width-device`。

- ***initial-scale*** 设置页面的初始缩放范围，为一个数字，可以带小数。

- ***minumum-scale*** 允许用户的最小缩放值，为一个数字，可以带小数。

- ***maximum-scale*** 允许用户的最大缩放值，为一个数字，可以带小数。

- ***height*** 设置 layout viewport 的高度，不重要，很少说明和使用。

- ***user-scalable*** 是否允许用户进行手动缩放，值为 `no` 或 `yes`。yes 代表允许这些属性可以同时使用，也可以单独使用或混合使用，多个属性同时使用时用逗号隔开就行了。

- ***viewport-cover*** 是为了控制文档是如何填充满屏幕的。

## 淘宝网触屏版

标准 meta 标签：

```html
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
```