/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let result = -1;
  const people = new Set();
  const count = {};

  for (const [a, b] of trust) {
    people.add(a);

    count[b] = b in count ? count[b] + 1 : 1;

    if (count[b] === n - 1) {
      result = b;
    }

    if (people.has(result)) {
      result = -1;
    }
  }

  return n === 1 ? n : result;
};

var findJudge = function (n, trust) {
  const trusted = Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    trusted[a]--;
    trusted[b]++;
  }

  return trusted.indexOf(n - 1, 1);
};
