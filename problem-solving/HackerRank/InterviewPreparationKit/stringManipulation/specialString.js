// https://www.hackerrank.com/challenges/special-palindrome-again
function specialString(str) {
  let count = 0;
  const { length } = str;
  for (let i = 0; i < length; i++) {
    count++;
    let l = i - 1;
    let r = i + 1;
    let ll = l;
    while ((l >= 0 && r < length) && (str[l] == str[ll] && str[r] == str[ll])) {
      l--;
      r++;
      count++;
    }

    l = i - 1;
    r = i;
    ll = l;
    while ((l >= 0 && r < length) && (str[l] == str[ll] && str[r] == str[ll])) {
      l--;
      r++;
      count++;
    }
  }

  return count;
}

function main(input) {
  let currentLine = 1;
  const str = input[currentLine];
  console.log(specialString(str));
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  main(processedInput);
}

processInput(`7
abcbaba`)
