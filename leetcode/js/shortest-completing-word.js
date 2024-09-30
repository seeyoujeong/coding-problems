/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const letters = licensePlate.replace(/[0-9\s]/g, "").toLowerCase();
  const filtered = words.filter((word) => {
    for (const letter of letters) {
      const replaced = word.replace(letter, "");

      if (replaced.length === word.length) {
        return false;
      }

      word = replaced;
    }

    return true;
  });

  filtered.sort((a, b) => a.length - b.length);

  return filtered[0];
};
