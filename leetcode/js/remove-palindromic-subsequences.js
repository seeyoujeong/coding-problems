/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  const reversed = [...s].reverse().join("");

  if (s === reversed) {
    return 1;
  } else {
    return 2;
  }
};
