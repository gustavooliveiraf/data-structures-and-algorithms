class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} newInterval
   * @return {number[][]}
   */
  insert(intervals, newInterval) {
    const result = new Array();
    for (let i in intervals) {
      if (newInterval[1] < intervals[i][0]) {
        result.push(newInterval);
        return result.concat(intervals.slice(i));
      } else if (newInterval[0] > intervals[i][1]) {
        result.push(intervals[i]);
      } else {
        newInterval = [Math.min(newInterval[0], intervals[i][0]), [Math.max(newInterval[1], intervals[i][1])]];
      }
    }

    result.push(newInterval);
    return result;
  }
}

const  intervals = [[1,2],[3,5],[9,10]], newInterval = [6,7];
console.log(new Solution().insert(intervals, newInterval));
