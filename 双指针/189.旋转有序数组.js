// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 只能在原数组上修改
// 进阶：
// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？

// 示例 1:
// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]

// 解决方案：
// 只需要将数组末端最后k个元素截取下来，放到数组前面去即可
// [1,2,3,4,5,6,7] => [5,6,7,1,2,3,4]
// [7,6,5,4,3,2,1] 先全部反转
// [5,6,7,4,3,2,1] 然后将前k位反转
// [5,6,7,1,2,3,4] 最后将k后面的反转
const reverse = (nums, start, end) => {
  while(start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]; // 将start和end交换位置，等价下面写法
    start++;
    end--;
  }
}
var rotate = function(nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1); // nums = [7,6,5,4,3,2,1]
  reverse(nums, 0, k - 1); // nums = [5,6,7,4,3,2,1]
  reverse(nums, k, nums.length - 1);
  console.log(nums);
}

// const reverse = (nums, start, end) => {
//   while (start < end) {
//       const temp = nums[start];
//       nums[start] = nums[end];
//       nums[end] = temp;
//       start += 1;
//       end -= 1;
//   }
// }
// var rotate = function(nums, k) {
//   k %= nums.length;
//   reverse(nums, 0, nums.length - 1);
//   // [7,6,5,4,3,2,1]
//   reverse(nums, 0, k - 1);
//   // [5,6,7,4,3,2,1]
//   reverse(nums, k, nums.length - 1);
//   // // [5,6,7,1,2,3,4]
//   console.log('nums', nums);
// };

rotate([1,2,3,4,5,6,7], 3)