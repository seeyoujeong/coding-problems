/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
  const result = [];
  const makeBinaryString = (str) => {
    if (str.length === n) {
      result.push(str);
      return;
    }

    if (str.length > 0 && str.at(-1) === "0") {
      makeBinaryString(str + "1");
    } else {
      makeBinaryString(str + "0");
      makeBinaryString(str + "1");
    }
  };

  makeBinaryString("");

  return result;
};
