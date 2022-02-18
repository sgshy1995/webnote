---
title: 理解BFC
---

## 常见定位方案

在说BFC之前，先看一下常见的定位方案。

- 普通流

在普通流中，元素按照在HTML中的先后位置之上而下布局。行内元素从左到右排列，宽度不够时自动换行；块级元素总是占满一行，从上到下。元素默认是普通流。

- 浮动

float。在浮动布局中，首先元素先按照普通流的位置出现，然后尽可能的根据浮动方向向左边或者右边便偏移。

- 定位

绝对定位。元素会同理文档流，不会对兄弟元素产生影响。绝对定位的位置相对于具有`relative、obsolute、fixed、sticky`的最近的父容器来定位，由绝对定位的坐标决定。固定定位相对于视窗固定。

## BFC的概念

`Formatting context`（格式化上下文）是CSS2.1规范中的概念。他是页面中的一块渲染区域且拥有自己的一套渲染规则，决定了其子元素如何定位，以及和其他元素的关系和相互作用。

BFC即`Block Formatting Contexts`（块级格式化上下文），它属于上述定位方案中的普通流。

**具有BFC特性的元素可以看做是隔离的独立容器，其内部的元素不会在布局上影响外面的元素，而且BFC具有普通容器所没有的一些特性。**

## 如何触发BFC特性

- `body`根元素

- 浮动定位元素，除`none`以外的所有值

- 绝对定位元素，`absolute`,`fixed`

- `display` 为 `inline-block`、`table-cells`、`flex`

- `overflow`除了`visible`以外的值，比如`hidden`、`auto`、`scroll`

## BFC特性及应用

常见的BFC特性和应用。

- 1、同一个BFC中的下外边距会发生重叠

比如两个div在body元素中，body具有BFC特性，这两个div的下边距会发生重叠。

```html
<head>
div{
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}
</head>
<body>
    <div></div>
    <div></div>
</body>
```

这不是CSS的bug，而是一种设计规范。**如果想避免外边距的重叠，可以将他们放在不同的BFC容器中。**

```html
<div class="container">
    <p></p>
</div>
<div class="container">
    <p></p>
</div>
```

```css
.container {
    overflow: hidden;
}
p {
    width: 100px;
    height: 100px;
    background: blue;
    margin: 100px;
}
```

- 2、BFC可以清除浮动

浮动元素脱离文档流，其父级元素的高度无法被撑开。

```html
<div style="border: 1px solid #000;">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```

**如果父级元素触发BFC，则高度将会撑开。**

```html
<div style="border: 1px solid #000;overflow: hidden">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```

- 3、BFC可以阻止元素被浮动元素覆盖

常见的文字环绕效果。

```html
<div style="height: 100px;width: 100px;float: left;background: lightblue">我是一个左浮动的元素</div>
<div style="width: 200px; height: 200px;background: #eee">我是一个没有设置浮动, 
也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;</div>
```

![float_bfc](/webnote/images/float_bfc.jpg)

第二个元素被第一个元素覆盖，如果想避免BFC，则触发第二个容器的BFC特性。

```html
<div style="height: 100px;width: 100px;float: left;background: lightblue">我是一个左浮动的元素</div>
<div style="width: 200px; height: 200px;background: #eee;overflow: hidden;">我是一个没有设置浮动, 
也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;</div>
```

![float_bfc_clear](/webnote/images/float_bfc_clear.jpg)

这个方法可以实现两列自适应布局，将右边的宽度去掉，左边宽度固定，右边会自适应宽度。