/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let result = 0;
  const digits = Array.from(String(num), Number);

  for (const digit of digits) {
    if (num % digit === 0) {
      result++;
    }
  }

  return result;
};
