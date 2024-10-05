/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s === goal) {
    const set = new Set([...s]);

    return s.length !== set.size;
  }

  let startIdx = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      startIdx = i;
      break;
    }
  }

  let lastIdx = -1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== goal[i]) {
      lastIdx = i;
      break;
    }
  }

  if (startIdx !== lastIdx) {
    const sArr = [...s];

    sArr[startIdx] = s[lastIdx];
    sArr[lastIdx] = s[startIdx];

    return sArr.join("") === goal;
  }

  return false;
};
