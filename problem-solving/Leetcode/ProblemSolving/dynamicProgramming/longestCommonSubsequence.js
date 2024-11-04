// https://leetcode.com/problems/longest-common-subsequence
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2, index1 = text1.length - 1, index2 = text2.length - 1,
                                        memo = new Array(index1 + 1).fill(null).map(_ => new Array())) {
  if (index1 === -1 || index2 === -1) {
    return 0;
  } else if (memo[index1][index2] !== undefined) {
    return memo[index1][index2];
  }

  if (text1[index1] === text2[index2]) {
    return memo[index1][index2] = 1 + longestCommonSubsequence(text1, text2, index1 - 1, index2 - 1, memo);
  }

  return memo[index1][index2] = Math.max(
    longestCommonSubsequence(text1, text2, index1, index2 - 1, memo),
    longestCommonSubsequence(text1, text2, index1 - 1, index2, memo)
  );
};

const text1 = "abcde", text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));
