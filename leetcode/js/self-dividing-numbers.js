/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    if (isSDN(i)) {
      result.push(i);
    }
  }

  return result;
};

function isSDN(num) {
  let origin = num;

  while (num >= 1) {
    let mod = num % 10;

    if (mod === 0 || origin % mod !== 0) {
      return false;
    }

    num = Math.floor(num / 10);
  }

  return true;
}
