// 문자열 반복해서 출력하기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str, n;

rl.on("line", function (line) {
  [str, n] = line.split(" ");
}).on("close", function () {
  console.log(str.repeat(n));
});
