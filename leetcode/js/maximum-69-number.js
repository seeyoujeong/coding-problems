/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const replaced = String(num).replace("6", "9");

  return Number(replaced);
};
