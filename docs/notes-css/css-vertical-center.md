---
title: CSS 垂直居中
---

## 几种方式

如何实现元素的垂直居中。

### 绝对定位（已知宽高）

```css
/* 若父元素宽高为 100px 100px */
.content{
    display: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
}
```

### 绝对定位（未知宽高）

```css
.content{
    display: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
```

或

```css
.content{
    display: absolute;
    margin: auto;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
}
```

### flex布局实现

```css
.content{
    display: flex;
    align-items: center;
    justify-content: center;
}
```

### 垂直居中 inline 元素（比如 img）

```css
.content{
    display: table-cell;
    text-align: center;
    vertical-align: center;
}
```