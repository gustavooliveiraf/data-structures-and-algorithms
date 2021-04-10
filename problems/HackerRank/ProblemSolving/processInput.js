function processInput(input) {
  const processedInput = input.trim().split('\n');

  main(processedInput);
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
