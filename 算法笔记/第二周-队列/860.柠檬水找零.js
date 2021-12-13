// https://leetcode-cn.com/problems/lemonade-change/

var lemonadeChange = function(bills) {
  let five = 0, ten = 0;
  for(let bill of bills) {
    if(bill === 5) {
      five++;
    } else if (bill === 10) {
      if(five === 0) return false;
      five--;
      ten++;
    } else {
      if(five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5,20]));


// 注释

// 贪心算法
// 