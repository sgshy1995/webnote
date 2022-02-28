---
title: 事件循环eventloop，宏任务和微任务
---

## 事件循环

事件循环（EventLoop）。

浏览器中的JavaScript的执行流程和NodeJs中的流程都是基于**事件循环**的，是单线程的。

它是在一个JS引擎等待任务，执行任务和进入休眠状态等多更任务这几个状态之间来回切换的无限循环。

一般算法为：

- 当有任务时，从最先进入的任务开始执行。

- 休眠直到出现新的任务，回到第一步开始。

## 宏任务

当引擎处于繁忙状态时，比如在处理一个任务，新的任务就会组成一个队列，即所谓的宏任务队列。

## 微任务

微任务来自与我们的代码。通常是由`promise` 创建的，比如对`then/catch/finally`处理程序的执行会成为微任务。微任务也被用于`await`的幕后。

**每个宏任务后，引擎会立即执行微任务队列中的所有任务，执行完成后再执行其他的宏任务，或进行渲染处理等其他操作。**

```js
setTimeout(() => alert("timeout"));

Promise.resolve()
  .then(() => alert("promise"));

alert("code");

// code
// promise 第二个出现，因为 then 会通过微任务队列，并在当前代码之后执行。注意：promise.reslove本身是同步的。
// timeout 宏任务
```

## 哪些是宏任务

|  #   | 浏览器  |  Node   |
|  ----  | ----  |  ----  |
| `I/O`  | ✅ |  ✅  |
| `setTimeout`  | ✅ |  ✅  |
| `setInterval`  | ✅ |  ✅  |
| `setImmediate`  | ❌ |  ✅  |
| `requestAnimationFrame`  | ✅ |  ❌  |

- 在官方文档中的定义，`setImmediate`为一次Event Loop执行完毕后调用。`setTimeout`则是通过计算一个延迟时间后进行执行。

- `requestAnimationFrame`姑且也算是宏任务吧，在MDN的定义为，下次页面重绘前所执行的操作，而重绘也是作为宏任务的一个步骤来存在的，且该步骤晚于微任务的执行。

## 哪些是微任务

|  #   | 浏览器  |  Node   |
|  ----  | ----  |  ----  |
| `process.nextTick`  | ❌ |  ✅  |
| `MutationObserver`  | ✅ |  ❌  |
| `Promise.then catch finally`  | ✅ |  ✅  |

- `process.nextTick` 可以认为是一个类似于Promise和MutationObserver的微任务实现，在代码执行的过程中可以随时插入nextTick，并且会保证在下一个宏任务开始之前所执行。

- 有些地方会列出来`UI Rendering`，说这个也是宏任务，可是在读了HTML规范文档以后，发现这很显然是和微任务平行的一个操作步骤。