// https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses/

/**
 * @param {string} s
 * @return {string}
 */
// 思路
// 如果匹配到左括号(，就将下标入栈，
// 如果匹配到右括号），就弹出栈里面一个数据；如果此时栈是空的，就需要删除右括号
// 最后将栈里面的下标数全部删除即可
var minRemoveToMakeValid = function(s) {
  let stack  = [];
  let res = s.split('');
  let len = res.length;
  for(let i = 0; i < len; i++) {
    let cur = res[i];
    if(cur === '(') {
      stack.push(i);
    } else if (cur === ')') {
      if(stack.length === 0) {
        // 删除右括号
        res[i] = '';
      } else {
        stack.pop();
      }
    }
  }
  for(let value of stack) {
    res[value] = '';
  }
  return res.join('');
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)")); // "lee(t(co)de)"  "lee(t(c)ode)" 
console.log(minRemoveToMakeValid('a)b(c)d')); // ab(c)d
console.log(minRemoveToMakeValid('))((')); // ''
console.log(minRemoveToMakeValid('(a(b(c)d)')); // a(b(c)d)