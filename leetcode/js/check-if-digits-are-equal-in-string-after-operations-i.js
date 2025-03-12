/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
  while (s.length > 2) {
    let temp = "";

    for (let i = 0; i < s.length - 1; i++) {
      const num = (Number(s[i]) + Number(s[i + 1])) % 10;
      temp += String(num);
    }

    s = temp;
  }

  return s[0] === s[1];
};
