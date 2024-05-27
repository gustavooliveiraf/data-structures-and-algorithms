
class TwoSum {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    for (let i = 0, j = numbers.length - 1; i < j;) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      } else if (numbers[i] + numbers[j] > target) {
        j--;
      } else {
        i++;
      }
    }
  }
}

const numbers = [1,2,3,4], target = 3;
console.log(new TwoSum().twoSum(numbers, target));
