class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.reduce((acc, cur) => `${acc}${cur.length}#${cur}`, '');
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const result = new Array();
    let i = 0;
    
    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') {
        j++;
      }
      let length = parseInt(str.substring(i, j), 10);
      i = j + 1;
      j = i + length;
      result.push(str.substring(i, j));
      i = j;
    }

    return result;
  }
}

const strs = ['neet', 'code', 'love', 'you'];
// console.log(new Solution().encode(strs));
console.log(new Solution().decode('4#neet4#code4#love3#you'));
