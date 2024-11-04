// https://leetcode.com/problems/next-greater-element-i/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const stack = new Array();
  const map = new Map();
  stack.push(nums2.shift());

  for (let num of nums2) {
    while (num > stack.at(-1)) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }

  return nums1.map(num => map.get(num) || - 1);
};

const nums1 = [2,4], nums2 = [1,2,3,4];
console.log(nextGreaterElement(nums1, nums2));
