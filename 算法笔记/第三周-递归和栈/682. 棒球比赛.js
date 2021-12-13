// https://leetcode-cn.com/problems/baseball-game/

/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
  let stack = [];
  let cur;
  for(let value of ops) {
    if(value === 'C') {
      stack.pop();
    } else if (value === 'D') {
      cur = Number(stack[stack.length - 1] * 2);
      stack.push(cur);
    } else if (value === '+') {
      cur =  Number(stack[stack.length - 1]) + Number(stack[stack.length - 2]);
      stack.push(cur);
    } else {
      stack.push(Number(value));
    }
  };
  return stack.reduce((pre, cur) => pre + Number(cur) , 0)
};