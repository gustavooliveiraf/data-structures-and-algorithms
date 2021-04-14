// https://www.hackerrank.com/challenges/making-candies
function balance(machines, workers, candies, cost) {
  if (candies >= cost) {
    const half = parseInt(parseInt(candies / cost, 10) / 2, 10);
    machines += half;
    workers += half;
    candies -= 2 * half * cost;
  }
  if (candies >= cost) {
    machines++;
    candies -= cost;
  }

  return [machines, workers, candies];
}

function makingCandies(machines, workers, cost, n) {
  let passes = 0;
  let candies = 0;
  let add = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let dot = machines * workers;

  while (candies < n) {
    if ((candies + dot) < cost) {
      add = parseInt((cost - candies) / dot, 10);
      candies += dot * add;
      passes += add;
    }

    min = Math.min(min, passes + Math.ceil((n - candies) / dot));

    const difference = Math.abs(machines - workers);
    if (difference != 0) {
      if (candies >= (difference * cost)) {
        add = difference;
      } else {
        add = parseInt(candies / cost, 10);
      }
      candies -= add * cost;

      if (machines > workers)
        workers += add;
      else
        machines += add;
    }

    [machines, workers, candies] = balance(machines, workers, candies, cost);

    dot = machines * workers;
    candies += dot;
    passes++;
    min = Math.min(min, passes + Math.ceil((n - candies) / dot));
  }

  return Math.min(min, passes);
}

function main(input) {
  const [m, w, p, n] = input;

  console.log(makingCandies(m, w, p, n));
}

function processInput(input) {
  const processedInput = input.trim().split(' ').map(Number);

  return main(processedInput);
}

// processInput(`1 1 100 100`);

// processInput('1 100 10000000000 1000000000000');

processInput('1 1 1000000000000 1000000000000')

// processInput('3 1 2 12');
// processInput('1 1 6 45');
