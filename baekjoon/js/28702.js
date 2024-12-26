const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n");

const nextNum = getNextNumber(inputs);

const result = createFizzBuzz(nextNum);

console.log(result);

function getNextNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);

    if (!Number.isNaN(num)) {
      return num + arr.length - i;
    }
  }
}

function createFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }

  if (num % 3 === 0 && num % 5 !== 0) {
    return "Fizz";
  }

  if (num % 3 !== 0 && num % 5 === 0) {
    return "Buzz";
  }

  return num;
}
