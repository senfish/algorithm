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
### 二分法搜索变种

对于`[1,2,2,2,3]`，这种类型的数组，当`target`是`2`时，返回的是下标也是`2`，符合算法的预期，但是不符合`2`在数组中第一次出现的位置下标，无法处理`target`的 **左侧边界** 或者 **右侧边界** 问题。

### 变种一：寻找左侧边界的二分搜索
> 采用都是闭合区间来实现

**给定有序数组`nums`和`target`，要求返回nums中第一次出现目标元素的下标，如果不存在，则返回 -1。**

>例子：`nums =  [1,2,2,2,4,5]`,  `target = 2`;
>返回：1

方法一：

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

方法二：

```js
var search = function (nums, target){
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let cur = nums[mid];
    if (cur === target) {
      if (mid === 0 || nums[mid - 1] < target) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else if (cur > target) {
      right = mid - 1;
    } else if (cur < target) {
      left = mid + 1;
    }
  }
  return -1;
}
```

- 取left和right的中值`mid`，`nums[mid]`与target比较
- 如果`nums[mid] > target`，说明想要找的数区间在`[left, mid - 1]`之间，即`right = mid - 1`;
- 如果`nums[mid] < target`，说明想要找的数区间在`[mid + 1, right]`之间，即`left = mid + 1`;
- 如果`nums[mid] === target`，且mid === 0，那肯定是我们要找的第一个元素(因为已经是nums[0]了)，如果mid不等于0且mid的前一项(nums[mid - 1]) 小于target的话，那必然也是我们要找的第一个目标元素，直接返回mid即可；如果都不是的话，说明`nums[mid]`并不是我们要找的第一个元素，仍然需要接着往左找，即`right = mid - 1`
### 变种二：寻找右侧边界的二分搜索

**给定有序数组`nums`和`target`，要求返回nums中最后一次目标元素的下标，如果不存在，则返回 -1。**

>例子：`nums =  [1,2,2,2,4,5]`,  `target = 2`;
>返回：3

方法一：
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

不管是 **基本二分搜索** 或 **寻找左侧边界** 或 **寻找右侧边界** 的二分搜索，当 `nums[mid] > target` 或者 `nums[mid] < target`时， `right` 和 `left` 变动的都一样，不一样的是 `nums[mid] === target` 这种情况的处理，

方法二：
```js
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let cur = nums[mid];
    if(cur === target) {
      if(mid === nums.length - 1 || nums[mid + 1] > target) {
        return mid;
      } else {
        left = mid + 1;
      }
    } else if (cur > target) {
      right = mid - 1;
    } else if (cur < target) {
      left = mid + 1;
    }
  }
}
```
思路同理**寻找右侧边界的二分搜索**的方法二
- 取left和right的中值`mid`，`nums[mid]`与target比较
- 如果`nums[mid] > target`，说明想要找的数区间在`[left, mid - 1]`之间，即`right = mid - 1`;
- 如果`nums[mid] < target`，说明想要找的数区间在`[mid + 1, right]`之间，即`left = mid + 1`;
- 如果`nums[mid] === target`，且mid是最后一个元素，那肯定是我们要找的最后元素(因为已经是nums数组最后一位了)；如果mid不等于数组的最后一位且mid的后一项(nums[mid + 1]) 大于target的话，那必然也是我们要找的最后元素，直接返回mid即可；如果都不是的话，说明`nums[mid]`并不是我们要找的最后元素，仍然需要接着往右找，即`left = mid + 1`
### 变种三：查找第一个大于等于给定值的元素

**给定有序数组`nums`和`target`，要求返回nums中第一个大于目标元素的下标，如果不存在，则返回 -1。**

>例子：`nums =  [3,4,6,7,10]`,  `target = 5`;
> nums中第一个大于5的数为6，下标为3；
>返回：2

```js
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let cur = nums[mid];
    if (cur >= target) {
      if(nums[mid - 1] < target || mid === 0) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else if (cur < target) {
      left = mid + 1;
    }
  }
  return -1;
}
```
### 变种四：查找最后一个小于等于给定值的元素

**给定有序数组`nums`和`target`，要求返回nums中最后一个小于等于目标元素的下标，如果不存在，则返回 -1。**

>例子：`nums =  [3,4,6,7,10]`,  `target = 5`;
> nums中第一个小于5的数为4，下标为1；
>返回：1

```js
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <=right) {
    let mid = Math.floor(left + (right - left) / 2);
    let cur = nums[mid];
    if(cur <= target) {
      if(mid === nums.length -1 || nums[mid + 1] > target) {
        return mid;
      } else {
        left = mid + 1;
      }
    } else {
      right = mid - 1
    } 
  }
}
```