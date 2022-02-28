---
title: 事件和事件流，事件模型
---

## 事件和事件流

### 事件

事件就是HTML文档或浏览器中发生的交互操作，使网页具有交互性。

### 事件流

由于DOM是一个树形结构，在父子节点绑定事件时，触发子节点，就会存在顺序问题，设计事件流：

事件流会有三个阶段：

- 事件捕获阶段（Capture Phase）

事件从外向内传播（从`document`到触发节点`node`），依次检查是否绑定事件，有则触发监听回调函数。

- 事件处理阶段（Target Phase）

事件达到目标元素，触发目标元素的监听函数。

- 事件冒泡阶段（Bubbling Phase）

事件从内向外传播（从触发节点`node`到`document`），以此检查是否绑定事件，有则触发监听回调函数。

## 事件模型

事件模型分为三种：

- 原始事件模型（DOM0级）

- 标准事件模型（DOM2级）

- IE事件模型（基本不用）

### 原始事件模型

事件绑定监听函数比较简单，有两种方式：

- HTML代码中直接绑定

```html
<span onclick="fun()">click</span>
```

- 通过js绑定

```js
const btn = document.getElementById("#button")
const fn = fn(){}
btn.onclick = fn
```

- 特性

绑定快。

只支持冒泡，不支持捕获。

同一个类型只能绑定一次，后面会覆盖前面，清空的话设置为 `null` 即可。

### 标准事件模型

该事件模型中，上述的三个任务流阶段都有可能存在。

```js
const btn = document.getElementById("#button")
btn.addEventListener(eventType,handler,useCapture)
btn.removeListener(eventType,handler,useCapture)
```

参数如下：

- `eventType` 指定时间类型

- `handler` 处理回调函数

- `useCapture` 是一个boolean值，指定是否在捕获阶段处理，默认为false

特性：

- 同一个事件可以绑定多个函数

### IE事件模型

只有事件处理阶段和事件冒泡阶段。

```js
document.attachEvent(eventType, handler)
document.detachEvent(eventType, handler)
```