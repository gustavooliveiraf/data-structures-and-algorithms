class Solution {
  /**
   * @param {number[]} hand
   * @param {number} groupSize
   * @return {boolean}
   */
  isNStraightHand(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;

    const freqCount = hand.reduce((acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1), new Map());
    while (freqCount.size > 0) {
      let start = freqCount[Symbol.iterator]().next().value[0];

      while (freqCount.has(start - 1)) {
        start--;
      }

      for (let i = 0; i < groupSize; i++) {
        const count = freqCount.get(start + i);
        if (!count) return false;

        if (count === 1) {
          freqCount.delete(start + i);
        } else {
          freqCount.set(start + i, count - 1);
        }
      }
    }

    return true;
  }
}

hand = [1,2,4,2,3,5,3,4], groupSize = 4;
console.log(new Solution().isNStraightHand(hand, groupSize));
