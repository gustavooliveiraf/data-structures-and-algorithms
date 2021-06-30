// https://www.hackerrank.com/challenges/ctci-recursive-staircase
const modules = 10000000007;
let mem;

function stepPerms(n) {
  if (mem[n]) return mem[n];

  return mem[n] = (stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3)) % modules;
}

function stepPermsDP(n) {
  const mem = new Array(n + 1);
  mem[1] = 1; mem[2] = 2; mem[3] = 4;
  for (let i = 4; i <= n; i++)
    mem[i] = (mem[i-1] + mem[i-2] + mem[i-3]) % modules;

  return mem[n];
}

const n = 36;
mem = new Array(n + 1);
mem[1] = 1; mem[2] = 2; mem[3] = 4;
console.log(stepPerms(36));
