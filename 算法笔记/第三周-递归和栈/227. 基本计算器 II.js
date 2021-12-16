// https://leetcode-cn.com/problems/basic-calculator-ii/

/**
 * @param {string} s
 * @return {number}
 */
 function calculate(s) {
  const map = {  // 创造数学逻辑上的运算符优先级
    '-': 1,
    '+': 1,
    '/': 2,
    '*': 2,
  }
  let res = '';
  let nums = []; // 存放数字, 默认放一个0，处理首位是负数的情况
  let ops = []; // 存放运算符
  s = s.replace(/\s/g, '')
  let sLen = s.length;
  for (let i = 0; i < sLen; i++) {
    let cur = s[i];
    if (/^[0-9]$/.test(cur)) {
      res += cur;
      if (i === sLen - 1) { // 处理遍历最后的时候
        nums.push(parseInt(res, 10));
        res = '';
        while (ops.length > 0) {
          cal(ops, nums);
        }
      }
    } else {
      nums.push(parseInt(res, 10));
      res = '';
      if (ops.length > 0) {
        // 比较当前运算符的优先级和ops栈里面最后一个运算符优先级的大小，区分是计算值还是放入nums栈
        if (map[cur] > map[ops[ops.length - 1]]) {
          // 当前优先级大的话，需要将操作符放入栈中
          ops.push(cur);
        } else {
          // 当前优先级与ops栈里面最后一个运算符优先级同级或者小的话，需要计算值
          // 每一次消耗ops栈，下一次计算的时候都要去比较
          // 当前运算符的优先级和ops栈里面最后一个运算符优先级的大小
          while (ops.length > 0 && map[cur] <= map[ops[ops.length - 1]]) {
            cal(ops, nums);
          }
          ops.push(cur);
        }
      } else {
        ops.push(cur);
      }
    }
  }
  return nums[0];
}

function cal(ops, nums) {
  let opera = ops.pop();
  let after = nums.pop();
  let pre = nums.pop();
  let res = '';
  switch (opera) {
    case '*':
      res = pre * after;
      break;
    case '/':
      res = Math.floor(pre / after);
      break;
    case '+':
      res = pre + after;
      break;
    case '-':
      res = pre - after;
      break;
  }
  nums.push(parseInt(res, 10));
}

console.log(calculate('111+10/2*2-2*2'));
console.log(calculate("1+2*5/3+6/4*2"));
console.log(calculate("3+2*2"));
console.log(calculate(" 3/2 "));
console.log(calculate(" 3+5 / 2 "));

