/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const count = arr.reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;

    return acc;
  }, {});

  const countValues = Object.values(count);

  return new Set(countValues).size === countValues.length;
};
