function findTopSum(arr, k, m) {
  let map = new Map();
  let asc = 0;
  let data = arr.sort((a, b) => b - a);
  for(value of data) {
    if(map.has(value)) {

    } else {
      map.set('')
    }
  }
}


console.log(findTopSum([1,2,4,4,3,5], 3, 1))
// 5 
// 