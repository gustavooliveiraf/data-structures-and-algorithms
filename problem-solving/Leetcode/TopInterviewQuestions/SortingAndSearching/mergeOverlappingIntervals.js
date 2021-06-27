// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/803/
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merge = new Array();

  merge.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    const last = merge.length - 1;
    if (intervals[i][0] > merge[last][1])
      merge.push(intervals[i]);
    else
      merge[last][1] = Math.max(merge[last][1], intervals[i][1]);
  }

  return merge;
};

const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals));
