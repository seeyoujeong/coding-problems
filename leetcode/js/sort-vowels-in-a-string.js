/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const vowelSet = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);
  const vowels = [...s]
    .filter((c) => vowelSet.has(c))
    .sort((a, b) => (a < b ? 1 : -1));

  let result = "";

  for (const c of s) {
    if (vowelSet.has(c)) {
      result += vowels.pop();
    } else {
      result += c;
    }
  }

  return result;
};
