/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  s = [...s].sort().join("");
  t = [...t].sort().join("");

  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) {
      return t[i];
    }
  }
};

var findTheDifference = function (s, t) {
  for (const c of s) {
    t = t.replace(c, "");
  }

  return t;
};

var findTheDifference = function (s, t) {
  const sCount = [...s].reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  for (const c of t) {
    if (!(c in sCount) || sCount[c] === 0) {
      return c;
    }

    sCount[c]--;
  }
};

var findTheDifference = function (s, t) {
  let charCode = 0;

  for (let i = 0; i < s.length; i++) {
    charCode ^= s.charCodeAt(i);
  }

  for (let i = 0; i < t.length; i++) {
    charCode ^= t.charCodeAt(i);
  }

  return String.fromCharCode(charCode);
};
