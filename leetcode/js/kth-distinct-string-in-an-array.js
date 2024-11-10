/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const count = arr.reduce((acc, cur) => {
    acc[cur] = cur in acc ? acc[cur] + 1 : 1;

    return acc;
  }, {});

  const distinct = Object.entries(count).filter(([_, v]) => v === 1);

  return distinct.length < k ? "" : distinct[k - 1][0];
};
