const a = new Array(3).fill(null);

a.forEach((elem, index) => {
  if (index === 0)
    return a[index] = new Array(3).fill(0);
  a[index] = new Array(3);
  a[index][0] = 0;
})

console.log(a)