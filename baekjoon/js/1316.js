const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();
const [, ...inputs] = buf.split("\n");

function isGroupWord(word) {
  const set = new Set([word[0]]);
  let prev = word[0];

  for (let i = 1; i < word.length; i++) {
    if (prev === word[i]) {
      continue;
    }

    if (set.has(word[i])) {
      return false;
    }

    prev = word[i];
    set.add(prev);
  }

  return true;
}

const result = inputs.filter(isGroupWord).length;

console.log(result);
