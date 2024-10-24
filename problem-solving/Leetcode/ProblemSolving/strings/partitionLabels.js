/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const result = new Array();

  const map = new Map();
  [...s].forEach((char, index) => map.set(char, index));
  
  let lastIndexGlobal = map.get(s[0]), partBeginningIndex = -1;
  for (let index = 0; index < s.length; index++) {
    if (lastIndexGlobal === index) {
      result.push(lastIndexGlobal - partBeginningIndex);
      partBeginningIndex = index;
      lastIndexGlobal = map.get(s[index + 1]);
    } else {
      const lastIndexLocal = map.get(s[index]);
      if (lastIndexLocal > lastIndexGlobal) {
        lastIndexGlobal = lastIndexLocal;
      }
    }
  }

  return result;
};

const s = "abc";
console.log(partitionLabels(s));
