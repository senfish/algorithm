// https://leetcode-cn.com/problems/partition-list/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var partition = function (head, x) {
  let  samll = new ListNode(0);
  let  large = new ListNode(0);
  let min =  samll;
  let max =  large;
  while(head) {
    let temp = head.next;
    if(head.val >= x) {
      max.next = head;
      max.next.next = null;
      max = max.next;
    } else {
      min.next = head;
      min.next.next = null;
      min = min.next;
    }
    head = temp;
  }
  // console.log('samll', JSON.stringify( samll, null, 2));
  // console.log('min', JSON.stringify( min, null, 2));
  // console.log('large', JSON.stringify( large, null, 2));
  // console.log('max', JSON.stringify( max, null, 2));
  min.next = large.next;
  return samll.next;
};

let head = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 5,
          next: {
            val: 2,
            next: null
          }
        }
      }
    }
  }
}

console.log(JSON.stringify(partition(head, 3), null, 2));