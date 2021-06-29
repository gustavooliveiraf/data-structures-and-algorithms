// https://www.hackerrank.com/challenges/ctci-fibonacci-numbers
let mem;
function fibonacci(n) {
  if (mem[n] !== undefined) return mem[n];

  return mem[n] = fibonacci(n - 1) + fibonacci(n - 2);
}

const n = 3;
mem = new Array(3);
mem[0] = 0; mem[1] = 1;
console.log(fibonacci(n));
