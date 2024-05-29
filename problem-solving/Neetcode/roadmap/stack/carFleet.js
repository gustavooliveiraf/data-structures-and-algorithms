class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    const stack = new Array();
    const pairSorted = position
      .map((elem, index) => [elem, speed[index]])
      .sort((a, b) => a[0] - b[0]);

    for (let index = pairSorted.length - 1; index >= 0; index--) {
      const [pos, spe] = pairSorted[index];
      stack.push((target - pos) / spe);
      if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
        stack.pop();
      }
    }

    return stack.length;
  }
}

const target = 10, position = [4,1,0,7], speed = [2,2,1,1];
console.log(new Solution().carFleet(target, position, speed));
