/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    result += i % 2 !== 0 ? shift(s[i - 1], s[i]) : s[i];
  }

  return result;
};

function shift(c, x) {
  if (typeof x === "string") {
    x = Number(x);
  }

  return String.fromCharCode(c.charCodeAt(0) + x);
}
