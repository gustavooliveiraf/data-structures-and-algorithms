class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let result = 0;
    for (let l = 0, r = heights.length - 1; l < r;) {
      const area = (r - l) * Math.min(heights[l], heights[r]);
      result = Math.max(result, area);

      if (heights[l] < heights[r]) {
        l++;
      } else {
        r--;
      }
    }

    return result;
  }
}

const height = [1,7,2,5,4,7,3,6];
console.log(new Solution().maxArea(height));
