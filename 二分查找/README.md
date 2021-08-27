## 二分查找

[力扣解答](https://leetcode-cn.com/problems/binary-search/solution/er-fen-cha-zhao-xiang-jie-by-labuladong/)

### 实现思路

- 确定一个搜索区间`[left, right]`，取一个中间值，每次循环比较 **中间值(middle)** 和 **目标值(target)** 的大小；
- 缩小left和right的值，

**时间复杂度** ： `O(logn)`

### 基本二分搜索解决方案
> 请查看[力扣704二分查找](https://leetcode-cn.com/problems/binary-search/)
```js
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let current = nums[mid];
    if (current > target) {
      right = mid - 1;
    } else if (current === target) {
      return mid;
    } else if (current < target) {
      left = mid + 1
    }
  }
  return -1
}
```
### 为什么用 `left + (right - left) / 2 `？
> 如果直接使用`(left + right) / 2`， `left + right` 有可能超过js最大安全数，确保不会超过最大安全数字，也可以使用`(left + right) >> 1`
### 未解决的问题

对于`[1,2,2,2,3]`，这种类型的数组，当`target`是`2`时，返回的是下标也是`2`，符合算法的预期，但是不符合`2`在数组中第一次出现的位置下标，无法处理`target`的 **左侧边界** 或者 **右侧边界** 问题。

### 寻找左侧边界的二分搜索
> 采用都是闭合区间来实现
```js
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) { // right = nums.lenght - 1 && left <= right 确定闭合区间
    let mid = Math.floor(left + (right - left) / 2);
    let cur = nums[mid];
    if (cur === target) {
      right = mid - 1;
    } else if (cur > target) {
      right = mid - 1;
    } else if (cur < target) {
      left = mid + 1;
    }
  }
  if (left >= nums.length || nums[left] !== target) return -1;
  return left;
}
```
### 寻找右侧边界的二分搜索

```js
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let cur = nums[mid];
    if (cur === target) {
      left = mid + 1;
    } else if (cur > target) {
      right = mid - 1;
    } else if (cur < target) {
      left = mid + 1;
    }
  }
  if (left > nums.length || nums[right] !== target) return -1;
  return right
}
```