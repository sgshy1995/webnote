---
title: "Vue2与Vue3"
---

# Vue2与Vue3

### VUE3.0六大亮点

1、性能快1.2~2倍。

2、按需编译，体积更小。

3、组合API。

4、更好的支持TypeScript。

5、暴露了自定义渲染API。

6、更先进的组件。

### 新的创建方式

3.0支持Vite创建方式，使用`npm init vite-app <项目名>`即可，需要预装vue3。比webpack更快更轻量，原理是使用ES6的import发送请求去按需加载文件特性。

### 性能优化四点

#### diff算法优化

- 在vue2中，虚拟dom是全量比较的。

- 在vue3中，增加了静态标记PatchFlag。在创建vnode时，会根据其内容是否可以变化，为其添加静态标记PatchFlag。
diff的时候，只会比较有PatchFlag的节点。PatchFlag是有类型的，比如一个可变化的文本节点，会将其添加PatchFlag枚举值为TEXT的静态标记。
这样在diff的时候，只需对比文本内容即可。需要对比的内容更少。
PatchFlag还有动态class，动态style，动态属性，动态key属性等枚举值。

#### render阶段的静态提升（render阶段指生成虚拟dom树的阶段）

- 在vue2中，一旦检查到数据变化，就会re-render组件，所有的vnode都会重新创建一遍，形成新的vdom树。

- 在vue3中，对于不参与更新的vnode，会做静态提升，只会创建一次，在re-render时直接复用。静态提升可以理解为第一次render不参与更新的vnode节点保存他们的引用，re-render新vdom树时，直接拿他们的引用过来即可，无需重复创建。

#### 事件侦听缓存

- 在vue2中，我们写的@click="onClick"也是被当作动态属性，diff的时候也要对比。但我们知道它不会变化，比如变成@click=“onClick2”，绑定别的值。

- 在vue3中，如果事件是不会变化的，会将onClick缓存起来（跟静态提升达到的效果类似），该节点也不会被标记上PatchFlag（也就是无需更新的节点）。这样在render和diff两个阶段，事件侦听属性都节约了不必要的性能消耗。

#### 减少创建组件实例的开销

- vue2每创建一个实例，在this上要暴露data、props、computed这些，都是靠defineProperty去定义的。这部分操作还是挺耗费性能的。

- vue3中基于Proxy，减少了创建组件实例的性能开销。

### 按需编译，体积小（Tree shaking）

在vue3中，可以如下面这样引用vue的功能函数，如果你的项目没有用到watch，那编译时候就会把 tree shaking 掉。

```js
import { computed, watch, nextTick } from "vue";
```

利用的就是 ES6 模块系统import/export。

### 组合式 Composition API

增加setup函数，是组合式API的入口，函数生命周期在beforeCreate之前执行。故函数内无法使用this，data和methods等。

在setup中可以将变量、方法、生命周期等都写在内。这样可以使同一功能函数的所有代码都在一个函数体内，项目结构更清晰更易维护。

在setup中定义的方法和变量需要return出去，否则无法在模板中使用。本质是将return暴露出去的数据变量注入data，方法注入methods中。

setup中的内容必须是同步的，要使用异步必须自定义customRef函数。

在我看来这就是Compostion API最大的特点，以功能为单位的代码组织方式。同时它可以让代码更易重用。

说到重用，Compostion API的方式也比mixin的方式好很多，你可以清楚的看到组件使用的数据和方法来自哪个模块，而mixin进组件的功能，常常会让我们困惑此功能来自哪个mixin。

### 响应式原理的区别

vue2的响应式原理是通过ES5的`defineProperty`实现的，对数据进行劫持处理，结合get/set发布订阅模式，然后反馈到视图层变化。

vue3响应式数据是通过ES6的`ProxyAPI`实现，使⽤`ref`或者`reactive`将数据转化为响应式数据。

#### proxy的优势

1、defineProperty只能监听某个属性，不能对对象监听。

2、可以省去 for in、闭包等内容来提升效率，直接绑定整个对象即可。

3、可以直接监听数组变化，无需进行特异性操作。

### 创建入口

- vue2

`new Vue({ render: h => h(App) }).$mount('#app')`

- vue3

`createApp(App).mount('#app')`

- vue3中单文件组件不在强制有根元素。

```html
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
```

### 生命周期变化

| vue2 | vue3 | 说明 |
|  ----  | ----  |  ----  |
| beforeCreate |  setup  | 组建创建之前 |
| created |  setup  | 组件创建完成 |
| beforeMount |  onBeforeMount  | 组件挂载之前 |
| mounted |  onMounted  | 组件挂载完成 |
| beforeUpdate |  onBeforeUpdate  | 数据更新，虚拟DOM更新前 |
| updated |  onUpdated  | 数据更新，虚拟DOM渲染更新完成 |
| beforeDestroy |  onBeforeUnmount  | 组件销毁之前 |
| destroyed |  onUnmounted  | 组件销毁后 |

### 获取props

- vue2

`this.props`

- vue3

```js
setup(props,context){ 
  console.log('props',props) 
}
```

### 向父组件传值

- vue2

`this.$emit()`

- vue3

```js
setup(props,context){ 
  context.emit()
}
```

### 更好的TS支持

vue2不适合使用ts，原因在于vue2的Option API风格。options是个简单对象，而ts是一种类型系统、面向对象的语法。两者有点不匹配。

在vue2结合ts的具体实践中，要用 vue-class-component 强化 vue 组件，让 Script 支持 TypeScript 装饰器，用 vue-property-decorator 来增加更多结合 Vue 特性的装饰器，最终搞的ts的组件写法和js的组件写法差别挺大。

在vue3中，量身打造了defineComponent函数，使组件在ts下，更好的利用参数类型推断 。Composition API 代码风格中，比较有代表性的api就是 `ref` 和 `reactive`，也很好的支持了类型声明。


```ts
import { defineComponent, ref } from 'vue'
 
const Component = defineComponent({
    props: {
        success: { type: String },
        student: {
          type: Object as PropType<Student>,
          required: true
       }
    },
    setup() {
      const year = ref(2020)
      const month = ref<string | number>('9')
     
      month.value = 9 // OK
     const result = year.value.split('') // => Property 'split' does not exist on type 'number'
    }
})
```

### 自定义渲染API（Custom Renderer API）

vue2.x项目架构对于这种渲染到不同平台不太友好，vue3.0推出了自定义渲染API解决了该问题。

```js
// vue2
import Vue from 'vue'
import App from './App.vue'
new Vue({ => h(App)}).$mount('#app')

// vue3
const { createApp }  from 'vue'
import App from "./src/App"
createApp(App).mount('#app')
```

vue官方实现的 createApp 会给我们的 template 映射生成 html 代码，但是要是你不想渲染生成到 html ，而是要渲染生成到 canvas 之类的不是html的代码的时候，那就需要用到 Custom Renderer API 来定义自己的 render 渲染生成函数了。

```js
// 你自己实现一个createApp，比如是渲染到canvas的。
import { createApp } from "./runtime-render";
import App from "./src/App"; // 根组件

createApp(App).mount('#app');
```

有了Custom Renderer API，如weex和myvue这类方案的问题就得到了完美解决。只需重写createApp即可。

### 更先进的组件

- Fragment组件

vue2是不允许这样写的，组件必须有一个跟节点，现在可以这样写，vue将为我们创建一个虚拟的Fragment节点。

```html
<template>
  <div>Hello</div>
  <div>World</div>
</template>
```

- Suspense组件

```html
<Suspense>
  <template >
    <Suspended-component />
  </template>
  <template #fallback>
    Loading...
  </template>
</Suspense>
```

在Suspended-component完全渲染之前，备用内容会被显示出来。如果是异步组件，Suspense可以等待组件被下载，或者在设置函数中执行一些异步操作。

### 更快的开发体验（vite开发构建工具）

vite的原理还是用了浏览器支持import关键字了，启动项目不用webpack构建工具先构建了，浏览器直接请求路由对应的代码文件，代理服务器针对单个文件进行编译并返回。如果请求的文件里还import了其他文件，同理浏览器继续发请求，代理服务器返回。就这样实现了npm run dev时无需编译，实时请求实时编译。

### 总结

vue3解决了vue2的一些问题，大型应用的性能问题、ts支持不友好问题，自定义渲染API解决体系架构存在的问题，如果在vue3的基础上实现weex框架会好很多。也做出了很多优化，Compostion API让代码的组织形式更好。vite开发构建工具让开发体验更好，Tree shaking让包更小、性能更优。
总的来说vue3还是非常棒的，带来了很多非常好的新特性。