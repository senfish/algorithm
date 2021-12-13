// https://leetcode-cn.com/problems/number-of-recent-calls/


var RecentCounter = function() {
  this.arr = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.arr.push(t);
  let min = t - 3000;
  let res = 0;
  for(let i = 0; i < this.arr.length; i++) {
    const value = this.arr[i];
    if(value >= min && value <= t) {
      res++;
    }
  }
  return res;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

let recentCounter = new RecentCounter();

recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3


//  注解
//  https://leetcode-cn.com/problems/number-of-recent-calls/solution/javascriptli-yong-dui-lie-de-si-xiang-by-0ly7/