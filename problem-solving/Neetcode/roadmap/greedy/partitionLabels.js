class Solution {
  /**
   * @param {string} S
   * @return {number[]}
   */
  partitionLabels(str) {
    const freqCount = str.split('').reduce((acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1), new Map());
    const res = new Array();

    let start = 0, count = 0;
    for (let i = 0; i < str.length; i++) {
      if (freqCount.get(str[i]) !== -Infinity) {
        count += freqCount.get(str[i]);
        freqCount.set(str[i], -Infinity);
      }

      count -= 1;

      if (count === 0) {
        res.push(i - start + 1);
        start = i + 1;
      }
    }

    return res;
  }
}

const s = "xyxxyzbzbbisl";
console.log(new Solution().partitionLabels(s));
