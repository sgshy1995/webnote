---
title: 数组的扁平化
---

## 什么是数组扁平化

数组扁平化就是将多维数组（存在嵌套数组）转化成一维数组。

## 常用方法

关于数组的扁平化有一些常用的方法。

### ES6提供的新方法 `Array.flat(depth)`

`Array.flat(depth)` depth 表示展开嵌套数组的深度，默认为1。**参数depth就是数组的维度减一。**

```js
let arr = [1, [2, 3]];
arr.flat();
// [1, 2, 3]
```

如果不知道数组的维度，可以将 depth 设置为 `Infinity`。

```js
let arr = [1, [2, [3, [4, 5]]]];
arr.flat(Infinity);
// [1, 2, 3, 4, 5]
```

### for循环

比较经典、万能的for循环递归写法。

```js
let arr = [1, [2, [3, 4]]];
function flat(array){
    let newArr = []
    for(let i = 0;i < arr.length;i ++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flat(arr[i]));
            // newArr = [...flat(arr[i])];
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr;
}
flat(arr);
// [1, 2, 3, 4]
```

### while循环

使用while和some实现数组的扁平化。

```js
let arr = [1, [2, [3, 4]]];
function flat(array){
    while(array.some(item=>Array.isArray(item))){
        array = [].concat(...array)
    }
    return newArr;
}
flat(arr);
// [1, 2, 3, 4]
```

### 利用reduce简写

```js
let arr = [1, [2, [3, 4]]];
function flat(array){
    return array.reduce((pre,next)=>{
        return pre.concat(Array.isArray(next) ? flat(next) : next);
    },[])
};
flat(arr);
// [1, 2, 3, 4]
```

进阶版可以控制深度的：

```js
let arr = [1, [2, [3, 4]]];
function flat(array, depth=1){
    return depth > 0 ? array.reduce((pre,next)=>{
        return pre.concat(Array.isArray(next) ? flat(next, depth - 1) : next);
    },[])
};
flat(arr,3);
// [1, 2, 3, 4]
```

### 利用stack堆无限反嵌套多层嵌套数组

```js
let arr = [1, [2, [3, 4]]];
function flat(array){
    let stack = [...array]; // 防止破坏原数组
    let result = []
    while(stack.length){
        let first = stack.shift() // 取出第一项，此时stack的length也减一
        Array.isArray(first) ? stack.unshift(...first) : result.push(first); // 第一项是数组的话，则展开unshift到stack的开头补充长度重新进行while循环；如果不是数组则直接push到result中，继续下一次循环
    }
    return result;
};
flat(arr);
// [1, 2, 3, 4]
```

### 如果全部是数组，可以用 `join()` 和 `toString()` 或 `JSON.stringify()`

```js
let arr = [1, [2, [3, 4]]];
function flat(array){
    return array.join().split(',').map(item=>+item)
};
flat(arr);
// [1, 2, 3, 4]
```

或使用 JSON 格式化和正则替换，再转化为数组

```js
let arr = [1, [2, [3, 4]]];
function flat(array){
    return JSON.parse(`[${JSON.stringify(array).replace(/(\[|\])/g,'')}]`).map(item=>+item);
};
flat(arr);
// [1, 2, 3, 4]
```

### ES6新语法 `Array.flatMap()` 可以展开二维数组

`Array.flatMap()` 原理类似先 `map()` 再 `flat()` 展开一层。

`flatMap()` 与 `map()` 不同，并不会改变原数组。

```js
let arr = [1, [2, 3, 4]];
let arrNew = arr.flatMap(item=>item);
// [1, 2, 3, 4]
```

## 性能比较

使用 `console.time()/timeEnd()` 来生成执行数组扁平化函数的时间。

结论为：

- 性能最好的是ES6的新语法 `Array.flat(depth)`。

- 性能最差的是 `while` 和 `Array.reduce()`。

- 其余的差距不大。

**如果有可能支持新属性，最好使用新属性`Array.flat(depth)`，或者`stack`方法。**