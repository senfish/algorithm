// https://leetcode-cn.com/problems/buddy-strings/

var buddyStrings = function(a, b) {
  // a，b长度不相等
  if(a.length !== b.length) return false;
  // a,b相同切有重复字母，返回TRUE
  if(a === b) return a.length > new Set(a).size;
  
  let temp = []; // 存放不相同字母
  for (let i = 0; i < a.length; i++) {
    if(a[i] !== b[i]){
      temp.push(a[i], b[i]);
    }
    if(temp.length > 4) return false; // 不相同字母超过两个
  }

  return (temp.length === 4) && (temp[0] === temp[3]) && (temp[1] === temp[2]);
}


console.log(buddyStrings('ab', 'ba'))