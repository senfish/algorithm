/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var reverseBetween = function (head, left, right) {
  // 1. 构造一个虚拟的头部节点
  let temp = new ListNode(0, head);
  // 2.找到pre.next = left的链表位置
  let pos = 0;
  let pre = temp;
  while(pos++ < left - 1) {
    pre = pre.next
  }

  let cur = pre.next;
  // 3. 从left开始遍历，到right结束，反转规则如下
  // 1,2,3,4,5,6
  // 1,3,2,4,5,6
  // 1,4,3,2,5,6
  // 1,5,4,3,2,6
  while(left++ < right) {
    const next = cur.next;
    cur.next = next.next;
    next.next = pre.next; // 这里要保证是pre.next，而不是cur(虽然第一次遍历，cur === pre.next)
    pre.next = next;
  }
  return temp.next
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
          next: {
            val: 6,
            next: null
          }
        }
      }
    }
  }
}
console.log(JSON.stringify(reverseBetween(head, 2, 5), null, 2))