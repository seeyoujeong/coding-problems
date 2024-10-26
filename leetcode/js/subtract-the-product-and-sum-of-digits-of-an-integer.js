/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const digits = intToDigits(n);

  return (
    digits.reduce((acc, cur) => acc * cur, 1) -
    digits.reduce((acc, cur) => acc + cur, 0)
  );
};

function intToDigits(num) {
  let result = [];

  while (num > 0) {
    result.push(num % 10);
    num = Math.floor(num / 10);
  }

  return result.reverse();
}

var subtractProductAndSum = function (n) {
  const digits = Array.from(String(n), Number);
  const product = digits.reduce((acc, cur) => acc * cur, 1);
  const sum = digits.reduce((acc, cur) => acc + cur, 0);

  return product - sum;
};
