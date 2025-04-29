/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const groups = new Map();

  for (let i = 1; i <= n; i++) {
    const sum = [...String(i)].reduce((acc, cur) => acc + Number(cur), 0);

    if (groups.has(sum)) {
      groups.set(sum, groups.get(sum) + 1);
    } else {
      groups.set(sum, 1);
    }
  }

  const largestSize = Math.max(...groups.values());

  return [...groups.values()].filter((size) => size === largestSize).length;
};
