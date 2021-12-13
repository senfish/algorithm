// https://leetcode-cn.com/problems/backspace-string-compare/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
  function render(str) {
    let stack = [];
    for(value of str) {
      if(value === '#') {
        stack.pop();
      } else {
        stack.push(value);
      }
    }
    return stack.join('');
  }
  return render(s) === render(t);
};

console.log(backspaceCompare('ab#c', 'ad#c')); //  true ac
console.log(backspaceCompare('ab##', 'c#d#')); // true ''
console.log(backspaceCompare('a##c', '#a#c')); // true c
console.log(backspaceCompare('a#c', 'b')); // false 