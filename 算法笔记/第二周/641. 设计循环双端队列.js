// https://leetcode-cn.com/problems/design-circular-deque/

// 设计实现双端队列。
// 你的实现需要支持以下操作：

// MyCircularDeque(k)：构造函数,双端队列的大小为k。
// insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true。
// insertLast()：将一个元素添加到双端队列尾部。如果操作成功返回 true。
// deleteFront()：从双端队列头部删除一个元素。 如果操作成功返回 true。
// deleteLast()：从双端队列尾部删除一个元素。如果操作成功返回 true。
// getFront()：从双端队列头部获得一个元素。如果双端队列为空，返回 -1。
// getRear()：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1。
// isEmpty()：检查双端队列是否为空。
// isFull()：检查双端队列是否满了。

/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
  this.arr = new Array(k);
  this.head = 0;
  this.tail = 0;
  this.count = 0;

};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function(value) {
  if(this.isFull()) return false;
  this.head--;
  if(this.head === -1) this.head = this.arr.length - 1;
  this.arr[this.head] = value;
  this.count++;
  return true;
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function(value) {
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
MyCircularDeque.prototype.deleteFront = function() {
  if(this.isEmpty()) return false;
  this.head++;
  if(this.head === this.arr.length) this.head = 0;
  this.count--;
  return true;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function() {
  if(this.isEmpty()) return false;
  this.tail--;
  if(this.tail === -1) this.tail = this.arr.length - 1;
  this.count--;
  return true;
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getFront = function() {
  if(this.isEmpty()) return -1;
  return this.arr[this.head];
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
  if(this.isEmpty()) return -1;
  let rear = this.tail - 1;
  if(rear === -1) rear = this.arr.length - 1;
  return this.arr[rear]
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  return this.count === 0;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {
  return this.count === this.arr.length;
};
["insertFront","deleteLast","getFront","insertLast","insertFront","getFront","getRear","getFront","getFront","getRear","insertLast"]
[[7],[],[],[5],[0],[],[],[],[],[],[0]]
[true,true,-1,true,true,0,5,0,0,5,false]
var circularDeque = new MyCircularDeque(2)
console.log(circularDeque.insertFront(7)) // true
console.log(circularDeque.deleteLast()) // true
console.log(circularDeque.getFront()) // -1
console.log(circularDeque.insertLast(5)) // true
console.log(circularDeque.insertFront(0)) // true
console.log(circularDeque.getFront()) // 0
console.log(circularDeque.getRear()) // 5
console.log(circularDeque.getFront()) // 0
console.log(circularDeque.getFront()) // 0
console.log(circularDeque.getRear()) // 5
console.log(circularDeque.insertLast(0)) // false

