/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  const arr = [1, 1, 1, 1, 1];

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < 5; j++) {
      arr[j] += arr[j - 1];
    }
  }

  return arr.reduce((acc, cur) => acc + cur, 0);
};
