const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const result = Array(26).fill(-1);

for (let i = 0; i < buf.length; i++) {
  const code = buf.charCodeAt(i) - 97;

  if (result[code] === -1) {
    result[code] = i;
  }
}

console.log(result.join(" "));
