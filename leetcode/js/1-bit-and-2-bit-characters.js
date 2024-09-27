/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  const strBits = bits.join("");
  const replaced = strBits.replaceAll("11", "2").replaceAll("10", "2");

  return replaced.at(-1) === "0";
};

var isOneBitCharacter = function (bits) {
  let i = 0;

  while (i < bits.length - 1) {
    if (bits[i] === 0) {
      i += 1;
    } else {
      i += 2;
    }
  }

  return i === bits.length - 1;
};
