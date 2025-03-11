const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const colors = buf.split("\n");

const colorMap = {
  black: [0, 1],
  brown: [1, 10],
  red: [2, 100],
  orange: [3, 1_000],
  yellow: [4, 10_000],
  green: [5, 100_000],
  blue: [6, 1_000_000],
  violet: [7, 10_000_000],
  grey: [8, 100_000_000],
  white: [9, 1_000_000_000],
};

const color1Val = colorMap[colors[0]][0] * 10;
const color2Val = colorMap[colors[1]][0];

const result = (color1Val + color2Val) * colorMap[colors[2]][1];

console.log(result);
