---
title: 面试 —— 什么是 MVC
---

## 面试

MVC 是什么？请简单阐述。

## MVC

MVC 是一种设计模式（或者软件架构），把系统分为三层：`Model数据`、`View视图` 和 `Controller控制器`。

- Model 数据管理，包括数据逻辑、数据请求、数据存储等功能。前端 Model 主要负责 AJAX 请求或者 LocalStorage 存储
- View 负责用户界面，前端 View 主要负责 HTML 渲染。
- Controller 负责处理 View 的事件，并更新 Model；也负责监听 Model 的变化，并更新 View，Controller 控制其他的所有流程。