const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [firstLine, ...lines] = buf.split("\n");

const [n] = firstLine.split(" ").map(Number);

const result = Array.from({ length: n }, (_, idx) => idx + 1);

for (const line of lines) {
  const [i, j] = line.split(" ").map(Number);
  result.splice(i - 1, j - i + 1, ...result.slice(i - 1, j).reverse());
}

console.log(result.join(" "));
