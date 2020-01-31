---
title: 如何数组去重
---

## 两种方式

用两种方式数组去重，包括 ES6 新语法。

要求：

不要做多重循环，只能遍历一次。

请给出两种方案，一种能在 ES 5 环境中运行，一种能在 ES 6 环境中运行（提示 ES 6 环境多了一个 Set 对象）。


### 常规写法

ES5：

```js
array = [1,5,2,3,4,2,3,1,3,4]

function unique(array) {
    var tempArr = []
    var hash = {}
    for(var i = 0; i < array.length; i++) {
        if(hash[array[i]] === undefined) {
            tempArr.push(array[i])
            hash[array[i]] = 0 //随便给一个值就可以只要不是undefined
        }
    }
    return tempArr
}

unique(array) 
//[1,5,2,3,4]
```

## 使用 set

ES6:

```js
array = [1,5,2,3,4,2,3,1,3,4]

function unique(array) {
    return [...new Set(array)]
}

unique(array) 
// [1,5,2,3,4]
```