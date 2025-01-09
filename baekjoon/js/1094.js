const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const x = Number(buf);

const result = [...x.toString(2)].filter((b) => b === "1").length;

console.log(result);
