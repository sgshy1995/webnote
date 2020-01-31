---
title: "Vue 的 watch 和 computed 的区别"
---

# watch 和 computed

### computed

- 计算属性
- 用来计算出一个值，在调用时不需要加括号，可以当做属性用
- 根据依赖自动缓存，在 getter 后缓存

### watch

- 有两个选项：deep(监听对象时是否看其内部属性的变化) 和 immediate(是否在第一次渲染时执行函数)
- 当依赖 data 变化时执行回调，传入两个值 oldValue 和 newValue
- 可以使用 $watch()方法

### 总结

- 如果一个数据依赖于其他数据，把该数据设计为 computed
- 如果需要在某个数据变化时做一些事情，使用 watch 来观察其变化来执行回调

