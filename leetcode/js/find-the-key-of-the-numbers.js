/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
  num1 = String(num1).padStart(4, "0");
  num2 = String(num2).padStart(4, "0");
  num3 = String(num3).padStart(4, "0");

  let result = "";

  for (let i = 0; i < 4; i++) {
    result += Math.min(Number(num1[i]), Number(num2[i]), Number(num3[i]));
  }

  return Number(result);
};
