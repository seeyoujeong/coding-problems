/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const vowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  return sentence
    .split(" ")
    .map((word, idx) => {
      const firstChar = word[0];
      let result = "";

      if (vowel.has(firstChar)) {
        result += word;
      } else {
        result += word.slice(1) + firstChar;
      }

      return result + "ma" + "a".repeat(idx + 1);
    })
    .join(" ");
};
