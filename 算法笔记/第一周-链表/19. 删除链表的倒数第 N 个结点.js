// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 进阶：你能尝试使用一趟扫描实现吗？

 var removeNthFromEnd = function(head, n) {
  if(head.next === null) return null;
  let size = 1;
  let cur = head;
  while(cur && cur.next) {
    cur = cur.next;
    size++;
  }
  let L = size - n % size - 1;
  let temp = head;
  while(L) {
    temp = temp.next;
    L--;
  }
  if(!temp.next) {
    head = head.next;
  } else {
    temp.next = temp.next.next;
  }
  return head;
};
let head = {
  val: 1,
  next: {
    val: 2,
    // next: null
    next: {
      val: 3,
      next: null
    }
  }
}

console.log(JSON.stringify(removeNthFromEnd(head, 3), null, 2))