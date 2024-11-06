/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  const digitsSum = Array.from(String(x), Number).reduce(
    (acc, cur) => acc + cur,
    0
  );

  return x % digitsSum === 0 ? digitsSum : -1;
};
