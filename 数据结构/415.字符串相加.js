let a = "123456789012345678";
let b = "1";
// 1. 先找出最大的长度的数
// 2. 给较小的数填充向前填充0
function add(num1 ,num2){
  let max = Math.max(num1.length, num2.length);
  num1 = num1.padStart(max, '0');
  num2 = num2.padStart(max, '0');
  // 123456789012345678
  // 000000000000000001
  // 对位相加
  let pos = max - 1;
  let ten = 0; // 十位
  let bit = 0; // 个位
  let res = ''; // 结果
  while(pos >= 0) {
    let sum = parseInt(num1[pos]) +  parseInt(num2[pos]) + ten;
    ten = Math.floor(sum / 10);
    bit = sum % 10;
    res = '' + bit + res;
    if(pos === 0 && ten !== 0) {
      res = ten + res;
    }
    pos--
  }
  return res;
}

console.log(add(a, b)); // 123456789012345679

