// https://leetcode-cn.com/problems/remove-outermost-parentheses/


/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function (s) {
  let index = 0;
  let arr = [];
  let stack = [];
  let res = '';
  while (index < s.length) {
    if (index === 0) {
      stack.push(s[index]);
    } else if (s[index] === ')') {
      stack.pop();
    } else {
      stack.push(s[index]);
    }
    res += s[index]
    index++;
    if (stack.length === 0) {
      arr.push(res);
      res = '';
    }
  }
  return arr.reduce((pre, cur) => {
    return pre + cur.slice(1, cur.length - 1);
  }, '')
};

// console.log(removeOuterParentheses('(()())(())'))
console.log(removeOuterParentheses('(()())(())(()(()))'))
// console.log(removeOuterParentheses('()()'))