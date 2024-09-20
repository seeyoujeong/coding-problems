/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let result = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      result += i;
    }
  }

  return result === num;
};

var checkPerfectNumber = function (num) {
  if (num === 1) return false;

  let start = 2;
  let end = num;
  let sum = 1;

  while (start < end) {
    if (num % start === 0) {
      end = Math.floor(num / start);
      sum += start;

      if (start !== end) {
        sum += end;
      }
    }

    start++;
  }

  return sum === num;
};
