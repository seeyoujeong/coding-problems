/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const countLetter = Array(26).fill(0);

  for (const letter of sentence) {
    const code = letter.charCodeAt(0) - 97;

    countLetter[code]++;
  }

  return countLetter.every((num) => num > 0);
};

var checkIfPangram = function (sentence) {
  return new Set(sentence).size === 26;
};
