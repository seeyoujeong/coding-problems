/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  let result = "";
  const reversed = [...s].reverse();

  for (let i = 0; i < s.length; i++) {
    result += reversed[i] < s[i] ? reversed[i] : s[i];
  }

  return result;
};

var makeSmallestPalindrome = function (s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const start = s[i];
    const end = s[s.length - 1 - i];

    result += start < end ? start : end;
  }

  return result;
};
