const print = (subset) => {
  for(let i = 0; i < subset.length; i++) if (subset[i]) process.stdout.write(subset[i] + ' ')
  console.log()
}

const allSubsetsVersion1 = (array, subset, i) => {
  if (i === array.length)
    print(subset)
  else {
    subset[i] = null
    allSubsetsVersion1(array, subset, i+1)
    subset[i] = array[i]
    allSubsetsVersion1(array, subset, i+1)
  }
}

function allSubsetsVersion2(n, i, partial) {
  if (i == -1)
    console.log(partial)
  else {
    allSubsetsVersion2(n, i - 1, partial)
    allSubsetsVersion2(n, i - 1, partial.concat(n[i]))
  }
}

// allSubsetsVersion1([1, 2, 3, 4], [], 0)
allSubsetsVersion2([1, 2, 3, 4], 3, [])
