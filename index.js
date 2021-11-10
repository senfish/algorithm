// // [0,0,0,1,1,1,2,2,3,3,4]


// // 定义两个快慢指针，两个指针同时只想第一位
// // 比较nums[slow]和nums[fast]的大小
// // 如果nums[slow] !== nums[fast]
// // [nums[slow + 1], nums[fast]] = [nums[fast], nums[slow + 1]]
// // slow = slow + 1

// var removeDuplicates = function(nums) {
//   let slow = 0;
//   let fast = 0;
//   while(fast < nums.length) {
//       if(nums[slow] !== nums[fast]) {
//         [nums[slow + 1], nums[fast]] = [nums[fast], nums[slow + 1]]
//         slow = slow + 1
//       }
//       fast++
//   }
//   return slow + 1;
// };

// console.log(removeDuplicates([0,0,0,1,1,1,2,2,3,3,4])) // 

function ListNode (val, next) {
  this.val = val;
  this.next = next === undefined ? null : next;
}
var a = new ListNode('a');
var b = new ListNode('b', a);
var c = new ListNode('c', b);
var d = new ListNode('d', c);
a.next = b;
// d => c => b => a 
//      ||        ||
//      ||  = = = ||
var hasCycle = function (head) {
  if (head.next.next === head) return false;
  let isCycle = false;
  // 定义快慢指针
  // 快指针走两步，慢指针走一步
  // 当快指针等于慢指针的时候，说明有环
  let slow = head;
  let fast = head.next.next;
  while(slow && slow.next && fast && fast.next && fast.next.next) {
    if (slow !== fast) {
      slow = slow.next;
      fast = fast.next.next;
    } else {
      return true;
    }
  }
  return isCycle;
}


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

console.log(JSON.stringify(hasCycle(d),null, 2))
console.log(JSON.stringify(hasCycle(head),null, 2))