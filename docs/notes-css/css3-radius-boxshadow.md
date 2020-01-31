---
title: CSS3 圆角 阴影
---

## 面试

用过CSS3吗? 实现圆角矩形和阴影怎么做?

## 回答

当然用过，比如动画、渐变、过渡、圆角、阴影等。

```css
{
    border: 1px solid red;
    width: 300px;
    height: 400px;
    border-radius: 5px; /* 设置半径为5px的四分之一圆弧圆角 */
    box-shadow: inset 2px 1px 2px wheat; /* box-shadow:投影方式 X轴偏移量 Y轴偏移量 阴影模糊半径 阴影扩展半径 阴影颜色 */
}
```