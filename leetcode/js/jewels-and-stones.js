/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let result = 0;
  const set = new Set([...jewels]);

  for (const stone of stones) {
    if (set.has(stone)) {
      result += 1;
    }
  }

  return result;
};
