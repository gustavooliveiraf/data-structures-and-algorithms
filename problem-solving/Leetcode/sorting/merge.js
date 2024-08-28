// https://leetcode.com/problems/merge-sorted-array/description/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let pointer1 = m - 1, pointer2 = n - 1;
  let resultPointer = m + n - 1;
  const result = new Array();

  for (let i = 0; i < m + n; i++) {
    if (nums1[pointer1] > nums2[pointer2] || pointer2 === - 1) {
      nums1[resultPointer--] = nums1[pointer1--];
    } else {
      nums1[resultPointer--] = nums2[pointer2--];
    }

    if (pointer1 === -1 || pointer2 === -1) {
      if (pointer1 === -1) {
        for (let i = pointer2; i >= 0; i--) {
          nums1[resultPointer--] = nums2[pointer2--];
        }
      } else {
        for (let i = pointer1; i >= 0; i--) {
          nums1[resultPointer--] = nums1[pointer1--];
        }
      }

      return nums1;
    }
  }
};

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
console.log(merge(nums1, m, nums2, n));

// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {
//   let pointer1 = 0, pointer2 = 0;
//   const result = new Array();

//   for (let i = 0; i < m + n; i++) {
//     if (nums1[pointer1] < nums2[pointer2] && m > pointer1) {
//       result.push(nums1[pointer1++]);
//     } else {
//       result.push(nums2[pointer2++]);
//     }

//     if (pointer1 === m || pointer2 === n) {
//       if (pointer1 === m) {
//         for (let i = pointer2; i < n; i++) {
//           result.push(nums2[i]);
//         }
//       } else {
//         for (let i = pointer1; i < m; i++) {
//           result.push(nums1[i]);
//         }
//       }

//       result.forEach((elem, i) => nums1[i] = elem);
//       return nums1;
//     }
//   }
// };