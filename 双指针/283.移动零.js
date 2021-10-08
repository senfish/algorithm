// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。
// 有点类似于双指针
// var moveZeroes = function(nums) {
//   let len = nums.length;
//   let count = nums[0] ? 0 : 1;
//   for(let i = 1; i < len; i ++) {
//     if (nums[i] === 0 ) {
//       count++;
//     } else {
//       if (count !== 0) {
//         nums[i - count] = nums[i]
//         nums[i] = 0;
//       }
//     }
//   }
// }

// var moveZeroes = function(nums) {
//   let count = 0;
//   for(let i = 0; i < nums.length; i++) {
//     if(nums[i] === 0) {
//       count++;
//       continue
//     }
//     nums[i - count] = nums[i];
//   }
//   while(count > 0) {
//     nums[nums.length - count] = 0;
//     count--;
//   }
// };

// left指向0的开始
// right指向非零
var moveZeroes = function(nums) {
  let l = 0, r = 0;
  while(r < nums.length) {
    if(nums[r] !== 0) {
      [nums[r], nums[l]] = [nums[l], nums[r]];
      l++
    }
    r++
  }
  console.log('nums', nums);
}

moveZeroes([0,1,0,3,12])
// [1,0,0,3,12] left=1, right= 2
// 