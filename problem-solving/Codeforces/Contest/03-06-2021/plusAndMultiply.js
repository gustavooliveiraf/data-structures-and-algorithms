// https://codeforces.com/contest/1542/problem/B
function solution(n, a, b) {
  if (a == 1) return (n - 1) % b === 0 ? true : false;

  let i = 1;
  while (i <= n) {
    if ((n - i) % b === 0) return true;
    i *= a;
  }

  return false;
}

function main() {
  const t = +readline();
  for (let i = 0; i < t; i++) {
    const [n, a, b] = readline().split(' ').map(elem => +elem);
    solution(n, a, b) ? print('Yes') : print('No');
  }
}
