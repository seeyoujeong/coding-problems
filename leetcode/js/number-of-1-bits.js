/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  return [...n.toString(2)].reduce((acc, cur) => acc + Number(cur), 0);
};
