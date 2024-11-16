/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let result = 0;
  const set = new Set();

  for (const word of words) {
    if (set.has(word)) {
      result++;
    } else {
      set.add([...word].reverse().join(""));
    }
  }

  return result;
};
