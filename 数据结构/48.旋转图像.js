// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵
// 请不要 使用另一个矩阵来旋转图像。

// [                         [
//   [1, 2, 3],                 [7, 4, 1],
//   [4, 5, 6],      =>         [8, 5, 2],
//   [7, 8, 9]                  [9, 6, 3],
// ]                          ]

// [0][0]  => [0][2]
// [0][1]  => [1][2]
// [0][2]  => [2][2]

// [1][0]  => [0][1]
// [1][1]  => [1][1]
// [1][2]  => [2][1]

// [2][0]  => [0][0]
// [2][1]  => [1][0]
// [2][2]  => [2][0]

// [row][clo] => [clo][n - 1 -row]
// 先按照对角线翻转，然后每一行反转 
var rotate = function(matrix) {
  let len = matrix.length;
  for(let i = 0; i < len; i++) {
    for(let j = i; j < len; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
    }
  }
  return matrix.map(item => item.reverse())
};
// push pop shift unshift  sort reverse splice
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))