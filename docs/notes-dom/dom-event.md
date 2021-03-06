---
title: DOM 事件
---

## 事件委托

事件委托，通俗来讲就是把一个元素的响应事件的函数委托到另一个元素。

***不监听元素 C 自身，而是监听其祖先元素 P，然后判断 event.target 是不是该元素 C（或该元素的子元素）。***

一般来讲，会把一个或者一组元素的事件委托到它的父层或更外层元素上，真正绑定事件的是外层元素，当事件响应到需要绑定的元素上时，会通过事件的冒泡机制而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数。


## 事件冒泡

就是事件从最深的节点开始，然后逐步向上传播事件。

冒泡阶段就是事件的触发响应会从最底层目标一层层地向外到最外层（根节点），事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层。

## 阻止默认动作

w3c 的方法是 `e.preventDefault()`，IE 则是使用 `e.returnValue = false`。

它是对事件对象(Event)的一个方法，作用就是取消一个元素的默认行为。

## 阻止事件冒泡

w3c 的方法是 `e.stopPropagation()`，IE 则是使用 `e.cancelBubble = true`。

它是对事件对象(Event)的一个方法，作用就是阻止元素的冒泡事件，阻止它的事件冒泡到父级元素。