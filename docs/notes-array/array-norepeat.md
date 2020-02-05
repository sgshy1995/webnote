---
title: 如何数组去重
---

## 三种方式

用三种方式数组去重，包括 ES6 新语法。

要求：

不要做多重循环，只能遍历一次。

请给出两种方案，一种能在 ES 5 环境中运行，一种能在 ES 6 环境中运行（提示 ES 6 环境多了一个 Set 对象）。


### 常规写法

ES5：

```js
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

const array = [1,5,2,3,4,2,3,1,3,4]

unique(array) 
//[1,5,2,3,4]
```

***缺点：*** 只支持数字或者字符串数组，如果数组里面有对象，比如 array = [{number:1}, 2]，就会出错。

## 使用 set

ES6:

```js
function unique(array) {
    return [...new Set(array)]
    // 或者 return Array.from(new Set(array))
}

const array = [1,5,2,3,4,2,3,1,3,4]

unique(array) 
// [1,5,2,3,4]
```

***缺点：*** 语法太新，IE不支持。

## 使用 Map

ES6：

```js
unique = (array) => {
    let newArray = []
    let map = new Map()
    for (let i = 0; i < array.length; i++){
        if (map.has(array[i])) {
            continue
        } else {
            newArray.push(array[i])
            map.set(array[i],'marked')
        }
    }
    return newArray
}

const array = [1,5,2,3,4,2,3,1,3,4]

unique(array)
// [1,5,2,3,4]
```

***缺点：*** 语法太新，IE不支持。