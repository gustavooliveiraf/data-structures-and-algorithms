// https://codeforces.com/contest/1542/problem/A
function oddSet() {
  const n = readline();
  const arr = readline().split(' ').map(elem => +elem);
 
  return (arr.filter(elem => elem % 2 === 0).length === (arr.length >> 1)) ? 'Yes' : 'No';
}
 
function main() {
  const t = +readline();
  for (let i = 0; i < t; i++) {
    print(oddSet());
  }
}
