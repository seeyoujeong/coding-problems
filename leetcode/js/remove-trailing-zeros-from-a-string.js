/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  const numArr = [...num];

  while (numArr.at(-1) === "0") {
    numArr.pop();
  }

  return numArr.join("");
};

var removeTrailingZeros = function (num) {
  return num.replace(/0+$/, "");
};
