
/**
 * 普通队列
 */

 function Queue (n) {
  this.arr = new Array(n);
  this.head = 0;
  this.tail = 0; // tail指向队尾元素的下一个
  this.count = 0;
}
// 入队
Queue.prototype.enqueue = function (val) {
  // 判断是否队满，队满的话，返回false，入队失败
  if(this.full()) return false;
  this.arr[this.tail] = val;
  this.tail++;
  this.count++;
}
// 出队
Queue.prototype.dequeue = function () {
  // 判断是否是空队，空队列的话，返回false，出队失败
  if(this.empty()) return false;
  let temp = this.arr[this.head];
  this.head++;
  this.count--;
  return temp;
}
// 查看队首元素
Queue.prototype.front = function () {
  return this.arr[this.head];
}
// 获取队列长度
Queue.prototype.size = function () {
  return this.tail - this.head;
}
// 队列是否为空
Queue.prototype.empty = function () {
  // tail === this.head;
  return this.size() === 0;
}
// 队列是否为满
Queue.prototype.full = function () {
  // 当尾指针指向最后一个元素的下一位时，此时队满
  return this.tail === this.arr.length;
}

function test (opts, vals) {
  let queue = new Queue(5);
  for(let i = 0; i < opts.length; i++) {
    let action = opts[i]
    switch(action) {
      case 'enqueue' :
        console.log('action => enqueue', queue[action](vals[i]))
        break;
      case 'dequeue':
        console.log('action => dequeue', queue[action]());
        break;
      case 'front':
        console.log('action => front',queue[action]());
        break;
      case 'size':
        console.log('action => size', queue[action]());
        break;
      case 'empty':
        console.log('action => empty', queue[action]());
        break;
      case 'full':
        console.log('action => full', queue[action]());
        break;
    }
  }
}
let opts = ['enqueue', 'enqueue', 'front', 'enqueue', 'size', 'dequeue', 'front',]
let vals = ['1', '2', '', '4', '', '', ''];

test(opts, vals);

