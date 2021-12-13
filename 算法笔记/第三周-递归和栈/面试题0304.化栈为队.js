// https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/

var MyQueue = function () {
  this.stack = [];
};
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

MyQueue.prototype.pop = function () {
  return this.stack.shift();
};

MyQueue.prototype.peek = function () {
  return this.stack[0];
};

MyQueue.prototype.empty = function () {
  return this.stack.length === 0
};

let queue = new MyQueue();

console.log(queue.push(1));
console.log(queue.push(2));
console.log(queue.peek());  // 返回 1
console.log(queue.pop());  // 返回 1
console.log(queue.empty()); // 返回 false
