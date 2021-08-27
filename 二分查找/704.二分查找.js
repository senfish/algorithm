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
// [0, ,,,, 6]
console.log(search([1,2,2,2,2,3], 2));
console.log(search([0,3,5,9,12], 9));
console.log(search([0,3,5,9,12], 99));
// 二分查找
// 从一堆有序数组里面取中间的值，与target相比较
// 找到target属于左边还是右边，然后递归查找
// 时间复杂度O(logn)