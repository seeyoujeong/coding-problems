const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [nm, ...inputs] = buf.split("\n");
const [n, m] = nm.split(" ").map(Number);

const siteMap = new Map();

for (let i = 0; i < n; i++) {
  const [site, pw] = inputs[i].split(" ");

  siteMap.set(site, pw);
}

const result = [];

for (let i = n; i < n + m; i++) {
  const pw = siteMap.get(inputs[i]);

  result.push(pw);
}

console.log(result.join("\n"));
