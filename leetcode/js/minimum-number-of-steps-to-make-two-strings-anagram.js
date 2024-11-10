/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const countS = Array(26).fill(0);
  const countT = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    countS[s.charCodeAt(i) - 97]++;
    countT[t.charCodeAt(i) - 97]++;
  }

  return countT.reduce((acc, cur, idx) => {
    if (cur > countS[idx]) {
      acc += cur - countS[idx];
    }

    return acc;
  }, 0);
};
