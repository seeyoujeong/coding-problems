/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let maxCount = 0;
  const countChar = [...s].reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;
    maxCount = Math.max(maxCount, acc[cur]);
    return acc;
  }, {});

  return Object.values(countChar).every((val) => maxCount === val);
};
