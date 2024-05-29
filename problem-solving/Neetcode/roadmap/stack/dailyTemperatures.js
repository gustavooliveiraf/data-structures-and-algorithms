class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = new Array(); // pair: [temp, index]

    temperatures.forEach((temp, i) => {
      while (stack.length && temp > stack.at(-1)[0]) {
        const [_, stackI] = stack.pop();
        result[stackI] = i - stackI;
      }
      stack.push([temp, i]);
    })
    
    return result;
  }
}

const temperatures = [30,38,30,36,35,40,28];
console.log(new Solution().dailyTemperatures(temperatures));
