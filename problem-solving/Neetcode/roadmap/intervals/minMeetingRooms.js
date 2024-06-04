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
    const startArray = new Array(), endArray = new Array;
    // intervals.forEach(intervals => [startArray.push(intervals.start), endArray.push(intervals.end)]);
    intervals.forEach(intervals => [startArray.push(intervals[0]), endArray.push(intervals[1])]);
    startArray.sort((a, b) => a - b);
    endArray.sort((a, b) => a - b);

    let count = 0, maxCount = 0;
    for (let i = 0, j = 0; i < startArray.length;) {
      if (endArray[j] > startArray[i]) {
        i++;
        count++;
        maxCount = Math.max(maxCount, count);
      } else {
        j++;
        count--;
      }
    }

    return maxCount;
  }
}

const intervals = [[0,40], [5,10], [15,20]];
console.log(new Solution().minMeetingRooms(intervals));
