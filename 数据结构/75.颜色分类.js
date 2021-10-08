// // 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序
// // 使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// // 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

// // 左右指针
// var sortColors = function(nums) {
//   // 定义左右指针，初始化分别指向开头和结尾
//   let left = 0;
//   let right = nums.length - 1;
//   while(left < right) {
//     if(nums[left] > nums[right]){
//       [nums[right], nums[left]] = [nums[left], nums[right]];

//     }
//   }
// };

// console.log(sortColors([2, 0, 1, 1])) // [0, 1, 1, 2]
// // console.log(sortColors([2,0,2,1,1,0])) // [0, 0, 1, 1, 2, 2]
// // console.log(sortColors([2,0,1])) // [0, 1, 2]


function sortColors(nums) {
  let left = 0;
  let right = nums.length - 1;
  for(let i = 0; i <= right; i++) {
    while(i <= right && nums[i] === 2) {
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
    }
    if(nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    }
  }
  return nums;
}
console.log(sortColors([2, 1, 2])) // [0, 1, 1, 2]
console.log(sortColors([2,0,2,1,1,0])) // [0, 0, 1, 1, 2, 2]
console.log(sortColors([1,2,0])) // [0, 1, 2]
