// https://www.hackerrank.com/challenges/recursive-digit-sum
function sumDigits(numberString) {
  let sum = 0;
  for (let i = 0; i < numberString.length; i++)
    sum += +numberString[i];

  return sum < 10 ? sum : sumDigits(sum.toString());
}

function superDigit(numberString, k) {
  return sumDigits((sumDigits(numberString) * k).toString());
}

const n = '9875', k = 4;
console.log(superDigit(n, k));
