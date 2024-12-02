const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

let [h, m] = buf.split(" ").map(Number);

if (m < 45) {
  m = 60 + m - 45;

  if (h === 0) {
    h = 23;
  } else {
    h -= 1;
  }
} else {
  m -= 45;
}

console.log(h, m);
