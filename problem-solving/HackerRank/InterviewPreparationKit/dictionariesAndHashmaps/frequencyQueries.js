// https://www.hackerrank.com/challenges/frequency-queries
function insert(query, freqQuery, x) {
  const valueQuery = query.get(x) || 0;
  const valueFreqQuery = freqQuery.get(valueQuery) || 0;

  if (valueFreqQuery === 1)
    freqQuery.delete(valueQuery);
  else if (valueQuery !== 0)
    freqQuery.set(valueQuery, valueFreqQuery - 1);

  query.set(x, valueQuery + 1);
  const newValueFreqQuery = freqQuery.get(valueQuery + 1) || 0;
  freqQuery.set(valueQuery + 1, newValueFreqQuery + 1);
}

function deletes(query, freqQuery, x) {
  const valueQuery = query.get(x) || 0;
  const valueFreqQuery = freqQuery.get(valueQuery) || 0;

  if (!valueQuery)
    return;

  if (valueQuery === 1) {
    query.delete(x);
  } else {
    query.set(x, valueQuery - 1);
  }

  if (valueFreqQuery === 1 && valueQuery === 1)
    freqQuery.delete(valueQuery);
  else {
    const newValueFreqQuery = freqQuery.get(valueQuery - 1) || 0;
    freqQuery.set(valueQuery, valueFreqQuery - 1);
    freqQuery.set(valueQuery - 1, newValueFreqQuery + 1);
  }
}

function main(input) {
  let currentLine = 0;
  const cases = Number(input[currentLine++]);
  const query = new Map();
  const freqQuery = new Map();

  for (let i = 0; i < cases; i++) {
    const [x, y] = input[currentLine++].split(' ').map(Number);
    if (x === 1) insert(query, freqQuery, y);
    else if (x === 2) deletes(query, freqQuery, y);
    else console.log(freqQuery.get(y) ? 1 : 0);
  }
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  main(processedInput);
}

processInput(`8
1 5
1 6
3 2
1 10
1 10
1 6
2 5
3 2`)
