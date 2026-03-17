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
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    const time = new Array();
    intervals.forEach(({ start, end }) => {
      time.push([start, 1]);
      time.push([end, -1]);
    });

    time.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);

    let localCount  = 0;
    let globalCount = 0;
    for (const [_, val] of time) {
      localCount += val;
      globalCount = Math.max(globalCount, localCount);
    }

    return globalCount;
  }
}
