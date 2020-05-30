// https://www.hackerrank.com/challenges/anagram/problem
function anagrams(str_1, str_2) {
  const { length } = str_1;
  const map = new Map();

  for (let i = 0; i < length; i++) {
    let value = map.get(str_1[i]);
    if (!value) {
      map.set(str_1[i], 1);
    } else {
      map.set(str_1[i], ++value);
    }
  }

  for (let i = 0; i < length; i++) {
    let value = map.get(str_2[i]);
    if (value) {
      if (value !== 1)
        map.set(str_2[i], --value);
      else
        map.delete(str_2[i]);
    }
  }

  return Array.from(map.values()).reduce((a, b) => a + b, 0);
}

function main(processedInput) {
  let currentLine = 0;

  const cases = Number(processedInput[currentLine++]);
  for (let i = 0; i < cases; i++) {
    const s = processedInput[currentLine++];
    const { length } = s;

    if (length % 2 === 1) {
      console.log(-1);
      continue;
    }

    console.log(anagrams(s.substring(0, length / 2), s.substring(length / 2, length)));
  }
}

function processInput(input) {
  const processedInput = input.split('\n');

  return main(processedInput);
}

processInput(`6
aaabbb
ab
abc
mnop
xyyx
xaxbbbxx`);
