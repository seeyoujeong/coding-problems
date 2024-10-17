/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  return date
    .split("-")
    .map((val) => Number(val).toString(2))
    .join("-");
};
