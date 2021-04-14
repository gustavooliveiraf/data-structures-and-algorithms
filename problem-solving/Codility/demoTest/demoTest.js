function solutionLoop(A) {
  const { length } = A;
  for (let i = 1; i <= length; i++) {
      let flag = true;
      for (let j = 0; j < length && flag; j++)
          if (i === A[j])
              flag = false;
      
      if (flag === true) return i;
  }

  return length + 1;
}

function solutionSet(A) {
  const set = new Set();
  const { length } = A;

  for (let i = 0; i < length; i++) set.add(A[i]);
  for (let i = 1; i <= length; i++)
    if (!set.has(i))
      return i;

  return length + 1;
}

function solutionMap(A) {
  const map = new Map();
  const { length } = A;

  for (let i = 0; i < length; i++) map.set(A[i]);
  for (let i = 1; i <= length; i++)
    if (!map.has(i))
      return i;

  return length + 1;
}

function solutionObject(A) {
  const obj = {};
  const { length } = A;

  for (let i = 0; i < length; i++) obj[A[i]] = true;
  for (let i = 1; i <= length; i++)
    if (!obj[i])
      return i;

  return length + 1;
}

console.log(solutionLoop([1, 3, 6, 4, 1, 2]))
console.log(solutionSet([1, 3, 6, 4, 1, 2]))
console.log(solutionMap([1, 3, 6, 4, 1, 2]))
console.log(solutionObject([1, 3, 6, 4, 1, 2]))
