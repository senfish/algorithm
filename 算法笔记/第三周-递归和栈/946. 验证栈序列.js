// https://leetcode-cn.com/problems/validate-stack-sequences/


/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 const validateStackSequences = (pushed, popped) => {
  let stack = [];
  let len = pushed.length;
  let pos = 0; // 指向popped的首位
  for(let i = 0; i<len; i++) {
    stack.push(pushed[i]);
    // 判断stack的栈顶是否跟popped的前面相等，相等就一直pop出去；
    while(popped[pos] !== undefined && stack[stack.length - 1] === popped[pos]) {
      stack.pop();
      pos++;
    }
  }
  return !stack.length;
};

// [1,2,3,4,5] [4,5,3,2,1]
console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]))

console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2]))

