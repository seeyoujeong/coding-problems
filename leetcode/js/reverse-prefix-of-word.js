/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const idx = word.indexOf(ch);

  if (idx !== -1) {
    const reversed = [...word.slice(0, idx + 1)].reverse().join("");
    const rest = word.slice(idx + 1);
    word = reversed + rest;
  }

  return word;
};
