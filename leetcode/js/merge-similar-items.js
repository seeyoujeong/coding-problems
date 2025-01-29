/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const itemsMap = new Map(items1);

  for (const [v, w] of items2) {
    itemsMap.set(v, itemsMap.has(v) ? itemsMap.get(v) + w : w);
  }

  const result = [...itemsMap];

  result.sort((a, b) => a[0] - b[0]);

  return result;
};
