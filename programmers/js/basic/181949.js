// 대소문자 바꿔서 출력하기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  let output = "";

  for (let char of input) {
    output +=
      char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
  }

  console.log(output);
});
