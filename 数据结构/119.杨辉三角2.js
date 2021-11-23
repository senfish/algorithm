// 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。


var getRow = function(rowIndex) {
  if(rowIndex === 0) return [1];
  if(rowIndex === 1) return [1, 1];
  let pos = 1;
  let preValue = [1,1];
  while(pos < rowIndex) {
    let current = [1];
    for(let i = 0; i < preValue.length - 1; i++) {
      current.push(preValue[i] + preValue[i + 1]);
    }
    current.push(1);
    preValue = current;
    pos++;
  }
  return preValue;
};

console.log(getRow(3)) // [1,3,3,1]
console.log(getRow(0)) // [1]
console.log(getRow(1)) // [1,1]
