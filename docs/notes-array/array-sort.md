---
title: 数组排序
---

## 自制函数

从小到大排序：

冒泡排序，每次比较 `第i项` 和 `第i+1项`，较大者交换到后面。共需要执行 `length-1` 次。

因此，外圈循环表示 `执行的轮数`，内圈循环表示 `每轮比较的次数`，因为每轮循环都可以找出一个最大的数放后面，所以每轮循环应执行 `length-1-j` 次。

```js
let array = [2, 1, 5, 3, 8, 4, 9, 5]

function sort(array) {
    for (let j = 0; j < array.length - 1; j++) {
        for (let i = 0; i < array.length - 1 - j; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
            }
        }
    }
    return array
}

sort(array)
console.log(array)
// [1, 2, 3, 4, 5, 5, 8, 9]
```

## 使用 Array.sort()

语法 `arr.sort([compareFunction])`。

从小到大排序：

```js
let array = [2, 1, 5, 3, 8, 4, 9, 5]

array.sort((a,b)=>{return a-b})
console.log(array)
// [1, 2, 3, 4, 5, 5, 8, 9]
```
