/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sArr = s.split(" ");

  if (pattern.length !== sArr.length) {
    return false;
  }

  const mapP = new Map();
  const mapS = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (mapP.has(pattern[i])) {
      if (mapP.get(pattern[i]) !== sArr[i]) {
        return false;
      }
    } else if (mapS.has(sArr[i])) {
      if (mapS.get(sArr[i]) !== pattern[i]) {
        return false;
      }
    } else {
      mapP.set(pattern[i], sArr[i]);
      mapS.set(sArr[i], pattern[i]);
    }
  }

  return true;
};
