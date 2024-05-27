class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const numsSorted = nums.sort((a, b) => a - b);
    const result = new Array();

    for (let i = 0; i < numsSorted.length - 1; i++) {
      if (i > 0 && numsSorted[i] === numsSorted[i - 1]) {
        continue;
      }
      for (let l = i + 1, r = numsSorted.length - 1; l < r;) {
        const threeSum = numsSorted[i] + numsSorted[l] + numsSorted[r];
        if (threeSum > 0) {
          r--;
        } else if (threeSum < 0) {
          l++;
        } else {
          result.push([numsSorted[i], numsSorted[l], numsSorted[r]]);
          l++;
          while (numsSorted[l] === numsSorted[l - 1]) {
            l++;
          }
        }
      }
    }

    return result;
  }
}

const nums = [-1,0,1,2,-1,-4];
console.log(new Solution().threeSum(nums));
