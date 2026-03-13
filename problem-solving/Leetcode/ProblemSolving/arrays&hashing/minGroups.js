/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
  const start = new Array, end = new Array();
  intervals.forEach(interval => {
    start.push(interval[0]) && end.push(interval[1])
  });

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let output = -Infinity;
  for (let i = 0, j = 0; i < intervals.length;) {
    if (start[i] <= end[j]) {
      i++;
    } else {
      j++;
    }

    output = Math.max(output, i - j);
  }

  return output;
};

const intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]];
console.log(minGroups(intervals));
