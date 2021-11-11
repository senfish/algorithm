// https://leetcode-cn.com/problems/swap-nodes-in-pairs/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var swapPairs = function(head) {
  if(head == null) return head;
  //1. 利用假的头节点实现交互链表节点
  let temp = new ListNode(0, head);
  let cur = temp;
  // 2. 开始交换
  while(cur.next && cur.next.next){
    const next = cur.next;
    const next2 = cur.next.next;
    cur.next = next2;
    next.next = next2.next;
    next2.next = next;
    cur = next;
  }
  // 返回交换之后的链表节点
  return temp.next;
};

let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

console.log(JSON.stringify(swapPairs(head), null, 2));

