const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const n = Number(buf);
const dp = Array(n + 1).fill(0);

for (let i = 2; i <= n; i++) {
  if (i % 3 === 0 && i % 2 === 0) {
    dp[i] = Math.min(dp[i - 1], dp[i / 3], dp[i / 2]);
  } else if (i % 3 === 0) {
    dp[i] = Math.min(dp[i - 1], dp[i / 3]);
  } else if (i % 2 === 0) {
    dp[i] = Math.min(dp[i - 1], dp[i / 2]);
  } else {
    dp[i] = dp[i - 1];
  }

  dp[i]++;
}

console.log(dp[n]);
