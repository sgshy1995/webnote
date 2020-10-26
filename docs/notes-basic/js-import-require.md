---
title: import 与 require
---

## 区别

import 与 require 的区别。

### 加载方式不同

- require 是在运行时加载。

```js
require('./a')(); // a 模块是一个函数，立即执行 a 模块函数

var data = require('./a').data; // a 模块导出的是一个对象

var a = require('./a')[0]; // a 模块导出的是一个数组 ======> 哪都行
```

- import 是在编译时加载。

```js
import $ from 'jquery';

import * as _ from '_';

import {a,b,c} from './a';

import {default as alias, a as a_a, b, c} from './a';  // 用在开头
```

### 规范不同

- require 是 CommonJs/AMD 规范。

- import 是 ESMAScript6+ 规范。

### 特点

- require：社区方案，提供了服务器/浏览器的模块加载方案。非语言层面的标准。只能在运行时确定模块的依赖关系及输入/输出的变量，无法进行静态优化。

- import：语言规格层面支持模块功能。支持编译时静态分析，便于 JS 引入宏和类型检验。动态绑定。