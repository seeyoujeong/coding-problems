/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  return Array.from({ length: n + 1 }, (_, i) => i)
    .map((v) => v.toString(2))
    .map((v) => [...v].filter((b) => b === "1").length);
};

var countBits = function (n) {
  const result = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }

  return result;
};

var countBits = function (n) {
  const result = Array(n + 1).fill(0);
  let offset = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset *= 2;

    result[i] = result[i - offset] + 1;
  }

  return result;
};
