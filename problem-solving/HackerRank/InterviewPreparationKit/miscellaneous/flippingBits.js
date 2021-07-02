// https://www.hackerrank.com/challenges/flipping-bits
function flippingBits(n) {
  return ~n >>> 0;
}

const n = 2147483647;
console.log(flippingBits(n));
