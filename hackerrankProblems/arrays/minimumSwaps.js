// https://www.hackerrank.com/challenges/minimum-swaps-2
function miniumSwaps(list) {
  const visited = new Array(length);
  let count = 0;
  
  const { length } = list;
  for (let i = 0; i < length; i++) {
    if (visited[i] === true || list[i].position === i)
      continue;

    let j = i;
    while (!visited[j]) {
      visited[j] = true;
      j = list[j].position;
      count++;
    }

    count--;
  }

  return count;
}

function main(processedInput) {
  let currentLine = 0;

  const k = Number(processedInput[currentLine++]);
  let list = processedInput[currentLine++].split(' ').map(Number);
  list = list.map((elem, index) => ({
    value: elem,
    position: index
  }));
  list = list.sort((a, b) => a.value - b.value);

  console.log(miniumSwaps(list));
}

function processInput(input) {
  const processedInput = input.split('\n');

  return main(processedInput);
}

processInput(`7
1 3 5 2 4 6 7`);
