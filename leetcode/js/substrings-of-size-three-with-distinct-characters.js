/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let result = 0;

  for (let i = 0; i < s.length - 2; i++) {
    const set = new Set([...s.slice(i, i + 3)]);

    if (set.size === 3) {
      result++;
    }
  }

  return result;
};
