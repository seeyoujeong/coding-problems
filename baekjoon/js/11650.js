const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");
const coordinates = inputs.map((input) => input.split(" ").map(Number));

coordinates.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

console.log(coordinates.map((coord) => coord.join(" ")).join("\n"));
