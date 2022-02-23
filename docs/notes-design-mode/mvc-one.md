---
title: 面试 —— 什么是 MVC 和 MVVM
---

## 面试

MVC 和 MVVM 是什么？有什么区别？请简单阐述。

## MVC

MVC 是一种设计模式（或者软件架构），把系统分为三层：`Model数据`、`View视图` 和 `Controller控制器`。

- Model 数据管理，包括数据逻辑、数据请求、数据存储等功能。前端 Model 主要负责 AJAX 请求或者 LocalStorage 存储
- View 负责用户界面，前端 View 主要负责 HTML 渲染。
- Controller 负责处理 View 的事件，并更新 Model；也负责监听 Model 的变化，并更新 View，Controller 控制其他的所有流程。

## MVC 的缺点

- MVC一个控制器对应一个视图，控制器用状态机进行管理。如果项目足够大时，状态机的代码就变得相当臃肿，难以维护。

- 性能问题：MVC中进行了大量的DOM操作，而大量的DOM操作会让页面渲染性能降低，加载速度变慢.

- Model频繁变化时，就会主动更新View，那么数据的维护就会非常困难。

## MVVM

如今的主流的web开发框架使用的都是MVVM设计模式，他让用户的界面和逻辑分离更加清晰。

MVVM相当于把Model和View的同步逻辑自动化了，ViewModel只需要View显示的数据对应的是Model的哪一部分即可。

- Model 

在MVVM中，Model可以称为数据层，仅关注数据本身，不关心其他的任何行为。在层间关系里，它主要用于抽象出 ViewModel 中视图的 Model。

- View

和 MVC 不同的是，MVVM的View通过使用模板语法这样来声明式的将数据渲染进DOM。他自己不处理数据，只是将ViewModel的数据展现出来。

为了和ViewModel产生关联，还需要做数据绑定的声明，指令的声明，事件绑定的声明。

ViewModel的变化能够反映到View中，View的变化能改变ViewModel的数据值。

例如：

```html
<input type='text' yg-model='message'>
```

随着用户输入值变化，在ViewModel中的message也会变化，这样就实现了View到ViewModel的单向绑定。

大致实现思路：

1、扫描看哪些节点上有 `yg-model`属性。

2、自动给这些节点加上onchange事件。

3、更新ViewModel中的数据，`ViewModel.message=innerText,innerHTML`。


ViewModel到View如何实现？

```html
<p yg-text='message'></p>
```

1、首先注册ViewModel。

2、扫描整个DOM Tree看哪些节点有yg-xxx这种属性

3、记录这些单向绑定的DOM节点和ViewModel之间的映射关系

4、使用`innerText,innerHtml=ViewModel.message`进行赋值。

- ViewModel

ViewModel起着连接View和Model的作用，同时用于处理View中的逻辑。

MVC 中的View通过调用Model中的方法与Model交互，在MVVM中View和Model并没有直接关系；在MVVM中，ViewModel从Model获取数据，然后应用到View中；还有就是处理View中的事件，触发ViewModel中的事件，包括更改Model或重新渲染View。

