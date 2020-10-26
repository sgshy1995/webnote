---
title: CSS 清除浮动
---

## float 后遗症清除

几种方法清除 float 浮动的后遗症。

### 使用额外标签法（不推荐）

在浮动的盒子下面再放一个标签，使用 `clear:both` 来清除浮动。

a 内部标签：会将父盒子的高度重新撑开；

b 外部标签：只能将浮动盒子的影响清除，但是不会成撑开盒子。

### 使用 overflow 清除浮动（不推荐）

先找到浮动盒子的父元素，给父元素添加 `overflow:hidden` ，就会清除子元素对页面的影响。

### 使用伪元素清除浮动（使用最多，推荐）

伪元素：页面上并不存在的元素，但是可以通过 css  添加。

```css
.clearfix::after{
    display: block;
    content: '';
    clear: both;
    /* 以上为核心代码 */
    height: 0;
    line-height: 0;
    visibility: hidden;
}
.clearfix{
    zoom: 1; /* 为了兼容IE6 */
}
```