// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 迭代
// var postorderTraversal = function (root) {
//   if(!root) return;
//   let prints = [];
//   let stack = [];
//   let cur = root;
//   let lastVisit = null;
//   // 先找到最左边的左子树
//   while (cur) {
//     stack.push(cur);
//     cur = cur.left;
//   }
  
//   console.log('stack', stack);
//   while (stack.length > 0) {
//     cur = stack.pop();
//     if(cur.right === null || cur.right === lastVisit) {
//       prints.push(cur.val);
//       lastVisit = cur;
//     } else {
//       stack.push(cur);
//       cur = cur.right;
//       while(cur) {
//         stack.push(cur);
//         cur = cur.left;
//       }
//     }
//   }
//   return prints.join('->');
// };

// 递归
var postorderTraversal = function(root, prints = []) {
  if(!root) return [];
  postorderTraversal(root.left, prints);
  postorderTraversal(root.right, prints);
  prints.push(root.val);
  return prints;
};

// 给定一个二叉树，返回它的后序遍历
// [1,null,2,3]  
let root = {
  "val": 1,
  "left": {
    "val": 2,
    "left": {
      "val": 4,
      "left": {
        "val": 8,
        "left": null,
        "right": null
      },
      "right": {
        "val": 9,
        "left": null,
        "right": null
      }
    },
    "right": {
      "val": 5,
      "left": null,
      "right": null
    }
  },
  "right": {
    "val": 3,
    "left": {
      "val": 6,
      "left": null,
      "right": null
    },
    "right": {
      "val": 7,
      "left": null,
      "right": null
    }
  }
}

console.log(postorderTraversal(root))