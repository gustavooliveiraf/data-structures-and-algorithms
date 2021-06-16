// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/
function threeSum (nums) {
  const response = [];
  const triplets = new Set();
  const map = new Map();
  nums.forEach(value => map.set(value, (map.get(value) || 0) + 1));

  for (let i = 0; i <= nums.length - 3; i++) {
    const numsI = nums[i];
    if (map.get(numsI) === 1) map.delete(numsI);
    else map.set(numsI, map.get(numsI) - 1);

    for (let j = i + 1; j <= nums.length - 2; j++) {
      const numsJ = nums[j];
      const target = - (numsI + numsJ);

      if (map.has(target)) {
        if (target === numsJ && map.get(target) === 1) continue;

        const sorted = [numsI, numsJ, target].sort((a, b) => a - b);
        const sortedString = sorted.toString();
        if (!triplets.has(sortedString)) {
          triplets.add(sortedString);
          response.push(sorted);
        }
      }
    }
  }

  return response;
}

const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));
