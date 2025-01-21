/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
  const converted = n.toString(2).replaceAll("0", "1");

  return parseInt(converted, 2);
};
