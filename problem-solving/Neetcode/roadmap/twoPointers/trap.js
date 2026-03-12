class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    const leftMax  = new Array(height.length).fill(-Infinity);
    const rightMax = new Array(height.length).fill(-Infinity);
    let localLeftMax  = -Infinity, localRightMax = -Infinity;

    for (let i = 1, j = height.length - 2; j >= 0; i++, j--) {
      localLeftMax  = Math.max(localLeftMax, height[i - 1]);
      leftMax[i]  = localLeftMax;

      localRightMax = Math.max(localRightMax, height[j + 1]);
      rightMax[j] = localRightMax;
    }

    let areaOfWater = 0;
    for (let i = 1; i < height.length - 1; i++) {
      const localAreaOfWater = Math.min(leftMax[i], rightMax[i]) - height[i];
      if (localAreaOfWater > 0) {
        areaOfWater += localAreaOfWater;
      }
    }

    return areaOfWater;
  }
}

const height = [4,2,0,3,2,5];
console.log(new Solution().trap(height));
