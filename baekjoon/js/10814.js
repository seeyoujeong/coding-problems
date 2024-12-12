const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");

const members = inputs.map((input) => input.split(" "));

members.sort((a, b) => a[0] - b[0]);

console.log(members.map((member) => member.join(" ")).join("\n"));
