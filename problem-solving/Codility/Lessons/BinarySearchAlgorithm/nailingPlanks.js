// https://app.codility.com/programmers/lessons/14-binary_search_algorithm/nailing_planks/
// Score 100%: https://app.codility.com/demo/results/trainingS554X5-FF6/
// Score 50%: solution that deletes elements from the array (TIMEOUT ERROR): https://app.codility.com/demo/results/training47X8KJ-SCM/
function binarySeach(nails, a, b) {
  let start = 0, end = nails.length - 1, mid;
  while (start < end) {
    mid = (start + end) >> 1;
    if (nails[mid][0] < a)
      start = mid + 1;
    else
      end = mid;
  }

  return (a <= nails[start][0] && nails[start][0] <= b) ? start : -1;
}

function getMinIndex(nails, a, b, minIndexLocal) {
  let minIndex = binarySeach(nails, a, b);
  if (minIndex === -1) return -1;

  let minIndexOrigin = nails[minIndex][1];
  for (let i = minIndex; i < nails.length; i++) {
    if (nails[i][0] > b) break;

    minIndexOrigin = Math.min(minIndexOrigin, nails[i][1]);
    if (minIndexOrigin <= minIndexLocal)
      return minIndexLocal;
  }

  return minIndexOrigin;
}

function solution(a, b, c) {
  const nails = c.map((elem, index) => [elem, index])
                 .sort((a, b) => a[0] - b[0]);
  const cache = new Set();
  let result = 0, str;

  for (let i = 0; i < a.length; i++) {
    str = `${a[i]},${b[i]}`;
    if (cache.has(str)) continue;
    else cache.add(str);

    result = getMinIndex(nails, a[i], b[i], result);
    if (result === -1) return -1;
  }

  return result + 1;
}

const a = [1, 4, 5, 8], b = [4, 5, 9, 10], c = [4, 6, 7, 10];
console.log(solution(a, b, c));
