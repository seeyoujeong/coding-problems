/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  for (let i = 2; i <= n - 2; i++) {
    const baseNum = n.toString(i);
    const reversed = [...baseNum].reverse().join("");

    if (baseNum !== reversed) {
      return false;
    }
  }

  return true;
};
