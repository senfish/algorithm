// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。
// 找出那个只出现了一次的元素。

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

var singleNumbers = function(nums) {
  let set = new Set();
  for(let value of nums) {
    if(set.has(value)) {
      set.delete(value)
    } else {
      set.add(value)
    }
  }
  return Array.from(set)
};

console.log(singleNumbers([1,2,10,4,1,4,3,3]));