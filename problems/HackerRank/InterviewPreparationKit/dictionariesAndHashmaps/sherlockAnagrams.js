// https://www.hackerrank.com/challenges/sherlock-and-anagrams]
const MAX_CHAR = 26;

function charToIndex(char) {
  return char.charCodeAt() - 97;
}

function checkAnagram(str_1, str_2) {
  const { length } = str_1;
  const compare = new Array(MAX_CHAR).fill(0);

  for (let i = 0; i < length; i++) {
    compare[charToIndex(str_1[i])]++;
    compare[charToIndex(str_2[i])]--;
  }

  for (let i = 0; i < MAX_CHAR; i++)
    if (compare[i] !== 0)
      return false;

  return true;
}

function anagrams(str) {
  const { length } = str;
  let sub_1 = '';
  let sub_2 = '';
  let count = 0;

  for (let len = 1; len < length; len++) {
    for (let i = 0; i < (length - len); i++) {
      sub_1 = str.substring(i, i + len);
      for (let j = i + 1; j < (length - len + 1); j++) {
        sub_2 = str.substring(j, j + len);
        if (checkAnagram(sub_1, sub_2))
          count++;
      }
    }
  }

  return count;
}

function main(processedInput) {
  let currentLine = 0;

  const cases = Number(processedInput[currentLine++]);
  for (let i = 0; i < cases; i++) {
    const str = processedInput[currentLine++];

    console.log(anagrams(str));
  }
}

function processInput(input) {
  const processedInput = input.split('\n');

  return main(processedInput);
}

processInput(`2
abba
abcd`);
