function processData(input) {
  // const processedInput = input
  //   .split('\n')
  //   .map(elem => elem.split(' ').map(elem => parseInt(elem)))
  //   .reduce((acc, val) => acc.concat(val), []);
  const processedInput = input.replace(/\n/g, ' ').split(' ').map(elem => parseInt(elem));

  return main(processedInput);
}