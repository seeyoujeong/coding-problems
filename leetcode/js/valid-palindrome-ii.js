/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    if (s.at(i) !== s.at(-i - 1)) {
      const s1 = [...s];
      const s2 = [...s];

      s1.splice(i, 1);
      s2.splice(-i - 1, 1);

      return (
        s1.join("") === s1.reverse().join("") ||
        s2.join("") === s2.reverse().join("")
      );
    }
  }

  return true;
};

var validPalindrome = function (s) {
  return isPalindrome(s, 0, s.length - 1, true);
};

function isPalindrome(s, start, end, flag) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return flag
        ? isPalindrome(s, start + 1, end, false) ||
            isPalindrome(s, start, end - 1, false)
        : false;
    }

    start++;
    end--;
  }

  return true;
}
