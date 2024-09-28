/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  return s.toLowerCase();
};

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let result = "";

  for (const char of s) {
    const asciiVal = char.charCodeAt(0);

    if (asciiVal >= "A".charCodeAt(0) && asciiVal <= "Z".charCodeAt(0)) {
      result += String.fromCharCode(asciiVal + 32);
    } else {
      result += char;
    }
  }

  return result;
};
