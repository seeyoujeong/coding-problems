/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  const num = n.toString(k);

  return [...num].reduce((acc, cur) => acc + Number(cur), 0);
};
