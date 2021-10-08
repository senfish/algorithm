// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]

// 解决方案一： bad
// var sortedSquares = function (nums) {
//   return nums.reduce((acc, cur) => {
//     return acc.concat(Math.pow(cur, 2))
//   }, []).sort((a, b) => {
//     if (a > b) {
//       return 1;
//     }
//     if (a < b) return -1;
//     return 0
//   });
// };

// 解决方案二： 
// 利用双指针
// 左指针指向下标index === 0,右指针指向最后一位，
// 都进行平方运算，比较两个的大小
// 将大的值插入到数组里面，然后移动对应的指针
var sortedSquares = function (nums) {
  // [-4, -3, 0, 3, 10]
  //   0   1  2  3   4
  let arr = [];
  for(let left = 0, right = nums.length -1; left <= right;) {
    let leftNum = Math.pow(nums[left], 2); // 16
    let rightNum = Math.pow(nums[right], 2);// 100
    if (leftNum > rightNum) {
      arr.unshift(leftNum);
      left++;
    } else {
      arr.unshift(rightNum);
      right--;
    }
  }
  return arr;
};

// const sortedSquares = function (nums) {
//   let res = []
//   for (let i = 0, j = nums.length - 1; i <= j;) {
//     const left = Math.abs(nums[i])
//     const right = Math.abs(nums[j])
//     if (right > left) {
//       // push element to the front of the array
//       res.unshift(right * right)
//       j--
//     } else {
//       res.unshift(left * left)
//       i++
//     }
//   }
//   return res
// }

console.log(sortedSquares([-4, -3, 0, 3, 10]))