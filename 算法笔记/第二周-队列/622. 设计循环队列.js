// https://leetcode-cn.com/problems/design-circular-queue/

/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
  this.arr = new Array(k);
  this.head = 0;
  this.tail = 0;
  this.count = 0;
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.isFull()) return false;
  this.arr[this.tail] = value;
  this.tail++;
  if(this.tail === this.arr.length) this.tail = 0;
  this.count++;
  return true;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty()) return false;
  this.head++;
  if(this.head === this.arr.length) this.head = 0;
  this.count--;
  return true;
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if(this.isEmpty()) return -1;
  return this.arr[this.head];
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if(this.isEmpty()) return -1;
  if(this.tail === 0) return this.arr[this.arr.length - 1];
  return this.arr[this.tail - 1];
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.count === 0;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return this.count === this.arr.length;
};

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/

// ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"]
// [[3],[1],[2],[3],[4],[],[],[],[4],[]]

let circularQueue = new MyCircularQueue(3);

console.log(circularQueue.enQueue(1)); // true
console.log(circularQueue.enQueue(2)); // true
console.log(circularQueue.enQueue(3)); // true
console.log(circularQueue.enQueue(4)); // false
console.log(circularQueue.Rear()); // 3
console.log(circularQueue.isF·ull()); // true
console.log(circularQueue.deQueue()); // true
console.log(circularQueue.enQueue(4)); // true
console.log(circularQueue.Rear()); // 4