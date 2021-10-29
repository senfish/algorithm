// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target
// 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4

// 方案一： [left, right]
// 对于这种情况有问题 [1,2,2,3,4]，当target是2时，返回2，
// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while(left <= right) {
//     let mid = Math.floor(left + (right - left) / 2);
//     let current = nums[mid];
//     if (current > target) {
//       right = mid - 1;
//     } else if (current === target) {
//       return mid;
//     } else if (current < target) {
//       left = mid + 1
//     }
//   }
//   return -1
// }

// 解决方案二： 寻找左侧边界的二分搜索
// 采用都是闭合区间来实现[left, right]
var search = function (nums, target) {
  // // [1,1,2,2,3]
  // let left = 0;
  // let right = nums.length - 1;
  // while(left <= right) { // right = nums.lenght - 1 && left <= right 确定闭合区间
  //   let mid = Math.floor(left + (right - left) / 2);
  //   let cur = nums[mid];
  //   console.log('right', right);
  //   if (cur === target) {
  //     right = mid - 1;
  //   } else if (cur > target) {
  //     right = mid - 1;
  //   } else if (cur < target) {
  //     left = mid + 1;
  //   }
  // }
  // if (left >= nums.length || nums[left] !== target) return -1;
  // return left;

  // [1,1,2,2,2,2,3]
  //  0 1 2 3 4 5 6
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let cur = nums[mid];
    if(cur === target) {
      if(mid === 0 || nums[mid - 1] < target) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else if (cur > target) {
      right = mid - 1;
    } else if(cur < target) {
      left = mid + 1;
    }
  }
  return -1;
}
// console.log(search([-1,0,3,5,9,12], 2));

// 解决方案三： 寻找右侧边界的二分搜索
// 都采用闭合区间来实现[left, right]
// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor(left + (right - left) / 2);
//     let cur = nums[mid];
//     if (cur === target) {
//       left = mid + 1;
//     } else if (cur > target) {
//       right = mid - 1;
//     } else if (cur < target) {
//       left = mid + 1;
//     }
//   }
//   if (left > nums.length || nums[right] !== target) return -1;
//   return right
// }
// console.log(search([-1,0,3,5,9,12], 2));
console.log(search([1,1,2,2,2,2,3], 2));
// 二分查找
// 从一堆有序数组里面取中间的值，与target相比较
// 找到target属于左边还是右边，然后递归查找
// 时间复杂度O(logn)