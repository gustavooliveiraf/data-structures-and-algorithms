const print = (subset) => {
  for(let i = 0; i < subset.length; i++) if (subset[i]) process.stdout.write(subset[i] + ' ')
  console.log()
}

const helper = (array, subset, i) => {
  if (i === array.length) print(subset)
  else {
    subset[i] = null
    helper(array, subset, i+1)
    subset[i] = array[i]
    helper(array, subset, i+1)
  }
}

const allSubsets = (array) => {
  const subset = []
  helper(array, subset, 0)
}

allSubsets([1, 2, 3])
