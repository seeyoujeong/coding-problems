/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  let result = s;

  while (true) {
    const replaced = result.replace(part, "");

    if (replaced.length === result.length) {
      break;
    }

    result = replaced;
  }

  return result;
};
