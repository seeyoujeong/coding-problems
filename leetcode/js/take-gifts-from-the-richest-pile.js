/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  for (let i = 0; i < k; i++) {
    const max = Math.max(...gifts);
    const idx = gifts.indexOf(max);

    gifts[idx] = Math.floor(Math.sqrt(max));
  }

  return gifts.reduce((acc, cur) => acc + cur, 0);
};
