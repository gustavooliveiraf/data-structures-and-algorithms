class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let l = 1, r = Math.max(...piles);
    let result = r;

    while (l <= r) {
      const mid = (r + l) >> 1;

      let hours = 0;
      for (let pile of piles) {
        hours += Math.ceil(pile / mid);
      }

      if (hours <= h) {
        r = mid - 1;
        result = Math.min(result, mid);
      } else {
        l = mid + 1;
      }
    }

    return result;
  }
}

const piles = [25,10,23,4], h = 4;
console.log(new Solution().minEatingSpeed(piles, h));
