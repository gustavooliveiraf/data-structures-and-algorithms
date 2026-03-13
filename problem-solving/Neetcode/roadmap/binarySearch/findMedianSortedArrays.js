class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(numsArg1, numsArg2) {
    let nums1, nums2;
    if (numsArg1.length <= numsArg2.length) {
      nums1 = numsArg1;
      nums2 = numsArg2;
    } else {
      nums1 = numsArg2;
      nums2 = numsArg1;
    }
    
    const total = nums1.length + nums2.length;
    const half = total >> 1;

    let left = 0, right = nums1.length - 1;
    while (true) {
      let i = (left + right) >> 1;
      let j = half - i - 2;

      const nums1Left  = i >= 0 ? nums1[i] : -Infinity;
      const nums1Right = (i + 1) < nums1.length ? nums1[i + 1] : Infinity;
      const nums2Left  = j >= 0 ? nums2[j] : -Infinity;
      const nums2Right = (j + 1) < nums2.length ? nums2[j + 1] : Infinity;

      if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
        return total % 2 === 0
          ? (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2
          : Math.min(nums1Right, nums2Right);
      } else if (nums1Left > nums2Right) {
        right = i - 1;
      } else {
        left = i + 1;
      }
    }
  }
}

const nums1 = [1,2], nums2 = [3];
console.log(new Solution().findMedianSortedArrays(nums1, nums2));
