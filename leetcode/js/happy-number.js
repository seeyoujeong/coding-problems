/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const prevNums = new Set([n]);

  while (n !== 1) {
    n = [...String(n)].reduce((acc, cur) => acc + cur * cur, 0);

    if (prevNums.has(n)) {
      return false;
    } else {
      prevNums.add(n);
    }
  }

  return true;
};
