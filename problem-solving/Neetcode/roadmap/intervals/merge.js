class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
      const res = new Array();

      intervals.sort((a, b) => a[0] - b[0]);
      let prevInterval = intervals[0];
      for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > prevInterval[1] || intervals[i][1] < prevInterval[0]) {
          res.push(prevInterval);
          prevInterval = intervals[i];
        } else {
          prevInterval = [Math.min(prevInterval[0], intervals[i][0]), Math.max(prevInterval[1], intervals[i][1])];
        }
      }

      res.push(prevInterval);
      return res;
    }
}

const intervals = [[1,2],[2,3]];
console.log(new Solution().merge(intervals));
