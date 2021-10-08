

var searchMatrix = function(matrix, target) {
  let res = false;
  let n =  matrix[0].length - 1;
  let row = 0; // 行坐标
  let col = matrix.length - 1; // 列坐标
  while(row <= n && col >= 0) {
      let value = matrix[col][row];
      if(value < target) {
          row++
      } else if (value > target) {
          col--
      } else if (value === target) {
          res = true;
          break;
      }
  }
  return res;
};
// console.log(searchMatrix([
//   [1,4,7,11,15],
//   [2,5,8,12,19],
//   [3,6,9,16,22],
//   [10,13,14,17,24],
//   [18,21,23,26,30]
// ], 5)); 

console.log(searchMatrix([
  [-5]
], -10)); 