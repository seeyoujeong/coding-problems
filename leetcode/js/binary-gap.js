/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let result = 0;
  const binary = n.toString(2);
  let prevIdx = binary.indexOf("1");

  for (let i = prevIdx + 1; i < binary.length; i++) {
    if (binary[i] === "1") {
      result = Math.max(result, i - prevIdx);
      prevIdx = i;
    }
  }

  return result;
};
