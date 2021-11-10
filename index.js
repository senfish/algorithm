// [0,0,0,1,1,1,2,2,3,3,4]


// 定义两个快慢指针，两个指针同时只想第一位
// 比较nums[slow]和nums[fast]的大小
// 如果nums[slow] !== nums[fast]
// [nums[slow + 1], nums[fast]] = [nums[fast], nums[slow + 1]]
// slow = slow + 1

var removeDuplicates = function(nums) {
  let slow = 0;
  let fast = 0;
  while(fast < nums.length) {
      if(nums[slow] !== nums[fast]) {
        [nums[slow + 1], nums[fast]] = [nums[fast], nums[slow + 1]]
        slow = slow + 1
      }
      fast++
  }
  return slow + 1;
};

console.log(removeDuplicates([0,0,0,1,1,1,2,2,3,3,4])) // 