const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const score = Number(input);
let result = "F";

if (score >= 90) {
  result = "A";
} else if (score >= 80) {
  result = "B";
} else if (score >= 70) {
  result = "C";
} else if (score >= 60) {
  result = "D";
}

console.log(result);
