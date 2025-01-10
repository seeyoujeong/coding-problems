const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();
const word = buf.toLowerCase();

let maxCount = 0;
const countChar = [...word].reduce((acc, cur) => {
  acc[cur] = cur in acc ? acc[cur] + 1 : 1;
  maxCount = Math.max(maxCount, acc[cur]);
  return acc;
}, {});

const maxCountList = Object.entries(countChar).filter(
  ([_, v]) => v === maxCount
);

const result =
  maxCountList.length === 1 ? maxCountList[0][0].toUpperCase() : "?";

console.log(result);
