---
title: flex的3个属性
---

## flex的3个属性是什么

```css
/* 1个值 flex-basis */
flex: 200px;

/* 1个值 flex-grow */
flex: 1;

/* 2个值 flex-grow | flex-shrink */
flex: 1 1;

/* 2个值 flex-grow | flex-basis */
flex: 1 200px;

/* 2个值 flex-grow | flex-shrink | flex-basis */
flex: 1 1 10%;
```

## flex-basis

```css
/* 指定 width */
flex-basis: 10%;
flex-basis: 200px;
flex-basis: 2em;
/* 基于 flex 的元素的内容自动调整大小 */
flex-basis: auto;

/* 全局数值 */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;

/* 固有的尺寸关键词 */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* 在flex item内容上的自动尺寸 */
flex-basis: content;
```