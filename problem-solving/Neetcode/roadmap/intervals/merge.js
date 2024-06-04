class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0] !== 0 ? a[0] - b[0] : a[1] - b[1]);

    const stack = new Array(intervals[0]);
    for (let curInter of intervals.slice(1)) {
      if (curInter[0] <= stack.at(-1)[1]) {
        const top = stack.pop();
        const newInter = [top[0], Math.max(top[1], curInter[1])];

        curInter = newInter;
      }
      stack.push(curInter);
    }

    return stack;
  }
}

const intervals = [[1,4],[2,3]];
console.log(new Solution().merge(intervals));
