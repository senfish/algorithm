
/**
 * 循环队列
 */

 function Queue (n) {
  this.arr = new Array(n);
  this.head = 0;
  this.tail = 0; // tail指向队尾元素的下一个
  this.count = 0; // 队列元素的个数
}
// 入队
Queue.prototype.enqueue = function (val) {
  // 判断是否队满，队满的话，返回false，入队失败
  if(this.full()) return false;
  this.arr[this.tail] = val;
  this.tail++;
  if(this.tail === this.arr.length) this.tail = 0;
  this.count++;
}
// 出队
Queue.prototype.dequeue = function () {
  // 判断是否是空队，空队列的话，返回false，出队失败
  if(this.empty()) return false;
  this.head++;
  if(this.head === this.arr.length) this.head = 0;
  this.count--;
}
// 查看队首元素
Queue.prototype.front = function () {
  return this.arr[this.head];
}
// 获取队列长度
Queue.prototype.size = function () {
  return this.count;
}
// 队列是否为空
Queue.prototype.empty = function () {
  return this.count === 0;
}
// 清空队列
Queue.prototype.clean = function () {
  this.head = this.tail = this.count = 0;
}
// 队列是否为满
Queue.prototype.full = function () {
  return this.count === this.arr.length;
}
Queue.prototype.output = function () {
  let temp = [];
  for(let i = 0, j = this.head; i < this.count; i++) {
    temp.push(this.arr[j]);
    j++;
    if(j === this.arr.length) j = 0;
  }
  return {
    temp,
    count: this.count,
    head: this.head,
    tail: this.tail,
  };
}

function test (opts, vals) {
  let queue = new Queue(4);
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
    console.log('result', queue.output());
  }
}
let opts = ['enqueue', 'enqueue', 'enqueue', 'front', 'enqueue', 'size', 'dequeue', 'enqueue', 'size',]
let vals = [1, 2, 3, '', 5, '','', 7, ''];

test(opts, vals);

