
// 给定一个大小为 n 的数组，找到其中的多数元素。
// 多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。


var majorityElement = function(nums) {
  let times = nums.length / 2;
  let map = new Map();
  let ele;
  for(let i = 0; i < nums.length; i++) {
    if(map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  map.forEach((item, index) => {
    if(item > times) {
      ele = index;
    }
  })
  return ele;
};
console.log(majorityElement([2,2,1,1,1,2,2])) // 2
console.log(majorityElement([3,2,3])) // 3
