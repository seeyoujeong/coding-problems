const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [, ...inputs] = buf.split("\n");

const recursion = (s, l, r, count) => {
  count++;

  if (l >= r) {
    return [1, count];
  } else if (s[l] != s[r]) {
    return [0, count];
  } else {
    return recursion(s, l + 1, r - 1, count);
  }
};

const isPalindrome = (s) => {
  return recursion(s, 0, s.length - 1, 0);
};

const result = inputs.map((s) => {
  const [val, count] = isPalindrome(s);

  return `${val} ${count}`;
});

console.log(result.join("\n"));
