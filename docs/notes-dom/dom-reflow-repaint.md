---
title: 浏览器的回流（重排）和重绘（Reflow and Repaint）
---

## 浏览器渲染原理

- 浏览器使用流式布局模型。

- 浏览器会把 `HTML` 解析生成 `DOM树`，把 `CSS` 解析成 `CSSOM`，`DOM` 和 `CSSOM` 合并成 `Render Tree`。

- 有了 `Render Tree` 之后，就知道了所有节点的样式，然后计算出在页面上的大小位置颜色等等，最后绘制节点。

- 由于浏览器使用流式布局，对 `Render Tree` 的计算通常只需要遍历一次就可以完成，但是 `table` 及其内部的元素除外，可能需要多次计算，越等同于3倍的其他元素的时间。

## 回流（重排）（Reflow）

当 `Render Tree` 中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器会重新渲染部分或全部文档的过程称为回流。

**会触发回流的操作：**

- 页面首次渲染。

- 浏览器视窗大小发生改变。

- 元素的尺寸或者位置发生变化。

- 元素的内容发生变化（文字数量或者图片大小等）。

- 元素字体大小发生改变。

- 添加或删除可见的DOM元素。

- 激活CSS伪类，比如 `:hover`。

- 查询某些属性或者调用某些方法。

**常用的且会导致回流的属性或方法：**

- `clientWidth` `clientHeight` `clientTop` `clientLeft`

- `offsetTop` `offsetLeft` `offsetwidth` `offsetHeight`

- `scrollWidth` `scrollHeight` `scrollLeft` `scrollTop`

- `scrollIntoView()` `scrollIntoViewIfNeeded()`

- `getComputedStyle()`

- `getBoundingClientRect()`

- `scrollTo`

## 重绘（Repaint）

当页面中的元素样式改变并不影响它在文档中的位置时，浏览器会重新绘制它的样式，这个过程叫做重绘。

## 性能影响

**回流比重绘的代价要高得多。**

有时即使回流一个单一元素，它的父元素以及其他的跟随它的元素也会跟着一起回流。

## 现代浏览器优化

现代浏览器本身会频繁的对回流或重绘操作进行优化。

浏览器会维护一个队列，把所有的重绘和回流操作放入队列中，如果队列的任务数量或者时间间隔达到一个阈值，浏览器就会清空队列，进行一次批处理，这样可以把多次操作合并为一次。

**立即清理队列的操作：**

- `clientWidth` `clientHeight` `clientTop` `clientLeft`

- `offsetTop` `offsetLeft` `offsetwidth` `offsetHeight`

- `scrollWidth` `scrollHeight` `scrollLeft` `scrollTop`

- `width` `height`

- `getComputedStyle()`

- `getBoundingClientRect()`

因为队列中可能有会影响到这些属性或者方法返回值的操作，即使你希望获取的信息与队列中操作所引发的改变无关，浏览器也会强行清空队列，确保你拿到的值是最精确的。

## 如何避免

### CSS

- 尽量避免 `table` 布局。

- 尽可能在DOM树的末端修改class。

- 避免设置多层内联样式。

- 将动画效果应用到 `position` 为 `fixed` 或 `absolute` 的元素中。

- 尽量避免使用css表达式 `calc`。

### JavaScript

- 尽量避免频繁的操作样式，最好一次性重写style样式，或者更改class且一次性修改。

- 尽量避免频繁的操作DOM，创建一个 `documentFragment`，在它上面进行DOM操作，最后提交到文档中。

- 可以将元素先设置为 `display: block;`，操作结束后再显示出来。

- 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用最好用变量缓存。

- 对具有复杂动画的元素使用绝对定位脱离文档流，否则会引起父元素及后续元素频繁的回流。


