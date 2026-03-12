class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
    largestRectangleArea = function(heights) {
    const stack = new Array();
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
      let start = i;
      while (stack.length > 0 && heights[i] < stack.at(-1)[1]) {
        const [curIndex, curHeight] = stack.pop();
        maxArea = Math.max(maxArea, heights[i], curHeight * (i - curIndex));
        start = curIndex;
      }

      stack.push([start, heights[i]]);
    }

    while (stack.length > 0) {
      const [curIndex, curHeight] = stack.pop();
      maxArea = Math.max(maxArea, curHeight * (heights.length - curIndex));
    }

    return maxArea;
  }
}

const heights = [2,1,5,6,2,3];
console.log(new Solution().largestRectangleArea(heights));
