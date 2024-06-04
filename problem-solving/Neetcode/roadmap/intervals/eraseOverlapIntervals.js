class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number}
   */
  eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0] !== 0 ? a[0] - b[0] : a[1] - b[1]);

    let count = 0;
    let prevEnd = intervals[0][1];
    for (let [start, end] of intervals.slice(1)) {
      if (start >= prevEnd) {
        prevEnd = end;
      } else {
        prevEnd = Math.min(prevEnd, end);

        count++;
      }
    }

    return count;
  }
}

const intervals = [[1,2],[2,4],[1,4]];
console.log(new Solution().eraseOverlapIntervals(intervals));
