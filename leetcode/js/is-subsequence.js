/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) {
    return false;
  }

  let result = "";

  for (const c of t) {
    if (s.includes(c) && s.startsWith(result + c)) {
      result += c;
    }
  }

  return result === s;
};

var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }

    j++;
  }

  return i === s.length;
};
