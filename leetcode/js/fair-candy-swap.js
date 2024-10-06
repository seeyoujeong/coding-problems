/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const aliceSum = aliceSizes.reduce((acc, cur) => acc + cur, 0);
  const bobSum = bobSizes.reduce((acc, cur) => acc + cur, 0);
  const diff = (aliceSum - bobSum) / 2;

  const setAlice = new Set(aliceSizes);

  for (const size of bobSizes) {
    if (setAlice.has(size + diff)) {
      return [size + diff, size];
    }
  }
};
