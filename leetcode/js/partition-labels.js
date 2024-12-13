/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const result = [];
  let curLetter = s[0];
  let curIdx = s.lastIndexOf(s[0]);
  let acc = 0;

  for (let i = 0; i < s.length; i++) {
    let idx = s.lastIndexOf(s[i]);

    if (idx > curIdx) {
      curLetter = s[i];
      curIdx = idx;
    }

    if (i === curIdx) {
      const size = i + 1 - acc;
      result.push(size);
      acc += size;
    }
  }

  return result;
};
