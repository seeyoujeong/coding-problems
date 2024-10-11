/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let result = 0;

  for (let i = 0; i < strs[0].length; i++) {
    const column = strs.map((str) => str[i]);

    if (column.join("") !== [...column].sort().join("")) {
      result++;
    }
  }

  return result;
};

var minDeletionSize = function (strs) {
  let result = 0;

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] > strs[j + 1][i]) {
        result++;
        break;
      }
    }
  }

  return result;
};
