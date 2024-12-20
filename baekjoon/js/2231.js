const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const n = Number(buf);
const nLen = String(n).length;

const calcSum = (num) => {
  let result = num;

  while (num !== 0) {
    let temp = num % 10;
    num = Math.floor(num / 10);
    result += temp;
  }

  return result;
};

let result = 0;

for (let i = nLen * 9 > n ? 1 : n - nLen * 9; i < n; i++) {
  const sum = calcSum(i);

  if (sum === n) {
    result = i;
    break;
  }
}

console.log(result);
