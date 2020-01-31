---
title: "Vue 的 watch"
---

# watch

### 模拟 computed

详见 vue-demo-3 ([vue-demo-undo](https://github.com/sgshy1995/vue-demo-undo))

### 用途

- 当数据变化时，执行一个函数
- 在 Vue 中，默认 data 中某个对象的属性变化时，该对象被认为是没有变的
- 你可以通过 deep 属性来改变
- 你可以通过 immediate 属性来监听它的创建，是否在第一次创建渲染时就执行 watch 函数

### 第一种用法

```js
watch: {
- 不要用箭头函数 ~~*o1:() => { }*~~}
- o2: function(newValue, oldValue) { }
- o3() { }
- o4: [f1, f2]
- o5: 'methodName'
- o6: {handler:fn, deep: true, immediate: true}, 'object.a': function() { }
```

} 

### 第二种用法

#### 写在外面

```js
const vm = new Vue({})

vm.$watch('xxx', fn, {deep: true}, {immediate: true})
```

#### 写在里面

```js
const vm = new Vue({
  data(){
    return {
      n: 0
    }
  },
  created(){
    this.$watch('n', function(){console.log('n is changed')}, {immediate: true})
  },
  watch:{
    ...
  }
})
```