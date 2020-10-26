---
title: CSS 选择器与优先级
---

## 选择器有哪些

1. id 选择器 `#app`
2. class 选择器 `.class`
3. 标签选择器 `div`
4. 相邻选择器 `div + span`
5. 子选择器 `ul > li`
6. 后代选择器 `ul li`
7. 通配符选择器 `*`
8. 属性选择器 `a[rel="external"]`
9. 伪类选择器 `a:hover`

## 属性的继承

哪些可继承，那些不可继承。

### 可继承

- `font-size`
- `font-family`
- `color`
- `UL LI DL DD DT`

### 不可继承

- `border`
- `padding`
- `margin`
- `width`
- `height`

## 优先级

- **就近原则：**样式定义最近者为准。
- **最后原则：**载入样式以最后载入的定位为准。
- !important > id > class > tag
- !important 比内联优先级高。

## CSS3伪类

CSS3新增伪类举例：

- `p:first-of-type` 选择属于其父元素的首个 `<p>` 元素的每个 `<p>` 元素。
- `p:last-of-type`  选择属于其父元素的最后 `<p>` 元素的每个 `<p>` 元素。
- `p:only-of-type`  选择属于其父元素唯一的 `<p>` 元素的每个 `<p>` 元素。
- `p:only-child`    选择属于其父元素的唯一子元素的每个 `<p>` 元素。
- `p:nth-child(2)`  选择属于其父元素的第二个子元素的每个 `<p>` 元素。
- `:enabled`、`:disabled` 控制表单控件的禁用状态。
- `:checked`，单选框或复选框被选中。
