/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  arr.sort((a, b) => {
    const countOneA = [...a.toString(2)].filter((v) => v === "1").length;
    const countOneB = [...b.toString(2)].filter((v) => v === "1").length;

    if (countOneA === countOneB) {
      return a - b;
    }

    return countOneA - countOneB;
  });

  return arr;
};
