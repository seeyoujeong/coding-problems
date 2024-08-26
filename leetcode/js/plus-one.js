/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const plusOneNum = BigInt(digits.join("")) + 1n;
  const splited = [...String(plusOneNum)];

  return splited.map(Number);
};
