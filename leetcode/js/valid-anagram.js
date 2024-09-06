/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return [...s].sort().join("") === [...t].sort().join("");
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const obj = {};

  for (const c of s) {
    obj[c] = c in obj ? obj[c] + 1 : 1;
  }

  for (const c of t) {
    if (!(c in obj) || obj[c] === 0) {
      return false;
    }

    obj[c]--;
  }

  return true;
};
