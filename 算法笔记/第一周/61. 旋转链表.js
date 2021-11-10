// https://leetcode-cn.com/problems/rotate-list/

// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var rotateRight = function(head, k) {
  if(head == null) return head;
  // 1. 先计算链表的长度
  let size = 1;
  let cur = head;
  while(cur && cur.next){
      cur = cur.next;
      size++
  }
  // 向右移动k个位置其实就是将倒数k个元素放到链表的头
  let L = size - k % size;
  cur.next = head;
  // 借用环形链表实现
  while(L--) {
    cur = cur.next;
  }
  // 给环形链表断开
  let res = cur.next;
  cur.next = null;
  return res;
};

let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

console.log(JSON.stringify(rotateRight(head, 2), null, 2));