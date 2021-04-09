// https://www.hackerrank.com/challenges/minimum-time-required
function bounds(arr) {
  let lower = Infinity;
  let upper = -1;

  const { length } = arr;
  for (let i = 0; i < length; i++) {
    if (arr[i] > upper)
      upper = arr[i];
    if (arr[i] < lower)
      lower = arr[i];
  }

  return [lower, upper];
}

function compute(arr, length, days) {
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += parseInt(days / arr[i], 10);
  }

  return sum;
}

function minimumTimeRequired(machines, n, goal) {
  const [lower, upper] = bounds(machines);
  let l = parseInt((goal / n) * lower, 10);
  let r = parseInt((goal / n) * upper, 10);
  let days = Infinity;

  while (l <= r) {
    const middleDay = parseInt((l + r) / 2, 10);
    const middleGoal = compute(machines, n, middleDay);

    if (middleGoal >= goal)
      if (middleDay < days)
        days = middleDay;

    if (middleGoal < goal)
      l = middleDay + 1;
    else
      r = middleDay - 1;
  }

  return days;
}

function main(input) {
  let currentLine = 0;
  const [n, goal] = input[currentLine++].split(' ').map(Number);
  const machines = input[currentLine++].split(' ').map(Number);

  console.log(minimumTimeRequired(machines, n, goal));
}

function processInput(input) {
  const processedInput = input.trim().split('\n');

  return main(processedInput);
}

processInput(`3 12
4 5 6`)
