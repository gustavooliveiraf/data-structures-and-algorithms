function processInput(input) {
  // const processedInput = input
  //   .trim()
  //   .split('\n')
  //   .map(elem => elem.split(' ').map(elem => parseInt(elem)))
  //   .reduce((acc, val) => acc.concat(val), []);

  const processedInput = input.trim().replace(/\n/g, ' ').split(' ').map(Number);

  return main(processedInput);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processInput(_input);
});
