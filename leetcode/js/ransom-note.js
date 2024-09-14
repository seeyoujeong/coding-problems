/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const count = [...magazine].reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  for (const c of ransomNote) {
    if (!(c in count) || count[c] < 1) {
      return false;
    }

    count[c] -= 1;
  }

  return true;
};

var canConstruct = function (ransomNote, magazine) {
  for (const c of magazine) {
    ransomNote = ransomNote.replace(c, "");
  }

  return ransomNote.length === 0;
};
