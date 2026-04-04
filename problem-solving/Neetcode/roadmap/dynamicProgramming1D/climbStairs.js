class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  climbStairs(n, mem = new Array(n + 1)) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (mem[n]) return mem[n];

    return mem[n] = this.climbStairs(n - 1, mem) + this.climbStairs(n - 2, mem);
  }
}

class SolutionDP {
  /**
   * @param {number} n
   * @return {number}
   */
  climbStairs(n) {
    if (n <= 2) return n;
    let prevPrev = 1, prev = 2, res;

    for (let i = 2; i < n; i++) {
      res = prev + prevPrev;
      prevPrev = prev;
      prev = res;
    }

    return res;
  }
}

const n = 4;
console.log(new Solution().climbStairs(n));
