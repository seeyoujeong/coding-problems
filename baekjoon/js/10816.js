const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const inputs = buf.split("\n");
const cards = inputs[1].split(" ");
const nums = inputs[3].split(" ");

const cardsMap = cards.reduce((acc, cur) => {
  if (acc.has(cur)) {
    acc.set(cur, acc.get(cur) + 1);
  } else {
    acc.set(cur, 1);
  }

  return acc;
}, new Map());

const result = nums.map((num) => (cardsMap.has(num) ? cardsMap.get(num) : 0));

console.log(result.join(" "));
