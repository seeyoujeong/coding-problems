/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const pairS = {};
  const pairT = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in pairS && pairS[s[i]] !== t[i]) {
      return false;
    } else if (t[i] in pairT && pairT[t[i]] !== s[i]) {
      return false;
    } else {
      pairS[s[i]] = t[i];
      pairT[t[i]] = s[i];
    }
  }

  return true;
};
