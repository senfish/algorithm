// 以无序数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  // 先取区间第一个排序
  let res = [];
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  res.push(intervals[0]);
  // [ [ 1, 3 ], [ 2, 6 ], [ 8, 10 ], [ 15, 18 ] ]
  for(let i = 1; i < intervals.length; i++) {
    let lastValue = res[res.length - 1];
    let currentValue = intervals[i];
    // 判断当前区间的左端点数小于res最后区间的右端点数，需要合并
    if(currentValue[0] <= lastValue[1]) {
      let max = Math.max(currentValue[1], lastValue[1]);
      lastValue[1] = max;
    } else {
      res.push(currentValue)
    }
  }
  return res;
};

console.log(merge([[8,10],[2,6], [1,3],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // [[1,5]]