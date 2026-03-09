// https://leetcode.com/problems/find-the-closest-palindrome
function halfToPalindrome(left, even) {
  let right = !even ? left / 10n : left;
  right = right === 0n ? '' : String(right).split('').reverse().join('');

  return BigInt(left + right);
}

/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(str) {
  const len = str.length;
  const i   = len % 2 === 0 ? len / 2 - 1: len / 2;
  const firstHalf = BigInt(str.substring(0, i + 1));

  const possibilities = new Array();
  possibilities.push(halfToPalindrome(firstHalf, len % 2 === 0));
  possibilities.push(halfToPalindrome(firstHalf + 1n, len % 2 === 0));
  possibilities.push(halfToPalindrome(firstHalf - 1n, len % 2 === 0));
  possibilities.push(BigInt(10n ** BigInt(str.length - 1) - 1n));
  possibilities.push(BigInt(10n ** BigInt(str.length) + 1n));

  const num  = BigInt(str);
  let globalDiff = Infinity, res = 0n;
  for (let pal of possibilities) {
    if (pal === num) continue;

    const localDiff = num > pal ? num - pal : pal - num;
    if (globalDiff > localDiff) {
      globalDiff = localDiff;
      res = pal;
    } else if (globalDiff === localDiff) {
      res = pal < res ? pal : res;
    }
  }

  return String(res);
};

const n = "807045053224792883";
console.log(nearestPalindromic(n));
