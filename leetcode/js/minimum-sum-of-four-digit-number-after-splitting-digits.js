/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const splited = [...String(num)].sort((a, b) => a - b);
  const num1 = Number(splited[0] + splited[2]);
  const num2 = Number(splited[1] + splited[3]);

  return num1 + num2;
};
