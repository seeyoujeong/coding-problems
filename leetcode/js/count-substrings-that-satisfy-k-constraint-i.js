/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  let result = 0;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j <= s.length - i; j++) {
      const sub = s.slice(j, j + i);

      let count0 = 0;
      let count1 = 0;

      for (const c of sub) {
        if (c === "0") count0++;
        if (c === "1") count1++;
      }

      if (count0 <= k || count1 <= k) {
        result++;
      }
    }
  }

  return result;
};
