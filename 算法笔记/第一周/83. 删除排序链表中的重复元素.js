// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 方法一： 利用遍历
// var deleteDuplicates = function(head) {
//   let cur = head;
//   // 1. 当cur指向链尾的时候，即cur = cur.next = null，处理边界问题
//   // 2. 当为空链表的时候
//   while(cur && cur.next) {
//     if(cur.val === cur.next.val) {
//       cur.next = cur.next.next;
//     } else {
//       cur = cur.next
//     }
//   }
//   return head;
// };
// let listNode = {
//   val: 1,
//   next: {
//     val: 1,
//     next: {
//       val: 2,
//       next: {
//         val: 3,
//         next: {
//           val: 3,
//           next: null
//         }
//       }
//     }
//   }
// };

// console.log(JSON.stringify(deleteDuplicates(listNode), null, 2));

// 时间复杂度 O(n)
// 空间复杂度 O(1)


// 方法二： 利用快慢指针

var deleteDuplicates = function (head) {
  if (head == null) {
    return null;
  }
  // let slow = head;
  // let fast = head.next;
  // while(fast && fast.next) {
  //   if(slow.val !== fast.val) {
  //     slow = slow.next;
  //   } else {
  //     slow.next = fast.next;
  //   }
  //   fast = fast.next;
  // }
  let slow = head;
  let fast = head;
  while(fast) {
    if(fast.val !== slow.val) {
      slow.next = fast; // 删除相同元素
      slow = fast; // 移动慢指针
    }
    fast = fast.next; // 移动快指针
  }
  slow.next = null; // 处理边界，最后两个节点相同的情况
  return head;
};

let listNode = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 2,
        // next: null
        next: {
          val: 3,
          next: null
        }
      }
    }
  }
};

console.log(JSON.stringify(deleteDuplicates(listNode), null, 2));