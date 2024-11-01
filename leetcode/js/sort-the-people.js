/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const heightMap = heights.reduce((acc, cur, idx) => {
    acc.set(cur, names[idx]);

    return acc;
  }, new Map());

  heights.sort((a, b) => b - a);

  return heights.map((h) => heightMap.get(h));
};
