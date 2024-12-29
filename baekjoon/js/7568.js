const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");

const list = inputs.map((input) => input.split(" ").map(Number));

const result = Array(list.length).fill(1);

for (let i = 0; i < list.length; i++) {
  const [weight1, height1] = list[i];

  for (let j = 0; j < list.length; j++) {
    if (i === j) continue;

    const [weight2, height2] = list[j];

    if (weight1 < weight2 && height1 < height2) {
      result[i]++;
    }
  }
}

console.log(result.join(" "));
