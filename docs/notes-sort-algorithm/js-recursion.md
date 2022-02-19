---
title: JS中的递归和性能优化
---

## 什么是递归

**递归**是指一个函数调用自己本身，并且每次调用做相同的事情，这个循环持续到基本条件满足时，调用循环返回。

## 循环与递归

处理一个需求，计算一个数组里有多少个奇数。

- 循环

```js
let arr = [1,2,3,4,5,6];
function oddCounter(array){
    let count = 0;
    array.forEach(item=>{
        item%2!==0 ? count++ : null;
    })
    return count;
}
oddCounter(arr);
// 3
```

- 递归

```js
let arr = [1,2,3,4,5,6];
function oddCounter(array){
    let first = array[0]%2!==0 ? 1 : 0
    return array.length <= 1 ? first : (first + oddCounter(array.slice(1)))
}
oddCounter(arr);
// 3
```

## 递归的要点

- 找到最小的可重复步骤

可重复意味着递归调用的每一步，做的事情都是一模一样的，且最终的答案由这些重复的步骤组成。

- 找到终止条件

递归不能无休止的重复下去，必须找到终止条件返回结果，否则会爆栈。

## 递归的弱点

递归功能很强大，但是由知名的弱点：**占用内存太大**。

在上述列子中，除了判断没一个数的奇偶性，还要把上一次的结果和下一次的相加；这意味着程序每运行一次，都要保留之前的结果以供归化的时候相加（生成一个调用栈）。

那么如何优化？

## 尾调用优化

就比如上述代码，每次调用都存在 first，对代码进行改进，在每一轮递归的时候把上次的统计结果 first 传入到下一次的调用中。

```js
let arr = [1,2,3,4,5,6];
function oddCounter(array,total=0){
    return array.length < 1 ? total : (total + (array[0]%2!==0 ? 1 : 0) + oddCounter(array.slice(1),total))
}
oddCounter(arr);
// 3
```

改造之后的函数相对独立，不再依赖前一步的执行环境，而是都在函数内部处理好根据形参传入的计算，不用等待每次归化的时候加总。

对函数来说，既然前面的调用栈和现在的没有关系了，也就不需要保存了，每一轮自己计算就可以，这就叫做 `尾调用优化（Tail Call Optimization）`，意味着最后一次（尾巴）递归调用的返回结果就是最终的结果。

在不支持尾调用优化的场景，可以把递归改为循环实现。