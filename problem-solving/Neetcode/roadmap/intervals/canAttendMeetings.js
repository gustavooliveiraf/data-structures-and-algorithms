/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {boolean}
   */
  canAttendMeetings(intervals) {
    const pairs = intervals.map(interval => [interval.start, interval.end]);
    pairs.sort((a, b) => a[0] - b[0]);

    let prev = pairs.shift();
    for (let curr of pairs) {
      const [prevStart, prevEnd] = prev;
      const [currStart, currEnd] = curr;
      if (prevEnd > currStart) {
        return false;
      }

      prev = curr;
    }

    return true;
  }
}

const intervals = [[0,30], [5,10], [15,20]];
console.log(new Solution().canAttendMeetings(intervals));
