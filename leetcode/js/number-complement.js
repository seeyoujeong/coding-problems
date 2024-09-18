/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const ones = "1".repeat(num.toString(2).length);

  return num ^ parseInt(ones, 2);
};

var findComplement = function (num) {
  const bitLength = num.toString(2).length;
  const allOnes = (1 << bitLength) - 1;

  return num ^ allOnes;
};

var findComplement = function (num) {
  let mask = 1;

  while (mask < num) {
    mask = (mask << 1) | 1;
  }

  return num ^ mask;
};
