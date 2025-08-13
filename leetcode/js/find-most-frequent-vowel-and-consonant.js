/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const vowels = new Map([
    ["a", 0],
    ["e", 0],
    ["i", 0],
    ["o", 0],
    ["u", 0],
  ]);
  const consonants = new Map();

  for (const c of s) {
    if (vowels.has(c)) {
      vowels.set(c, vowels.get(c) + 1);
    } else {
      const val = consonants.get(c);

      consonants.set(c, val ? val + 1 : 1);
    }
  }

  const maxVowelCount = Math.max(...vowels.values());
  const maxConsonantsCount = consonants.size
    ? Math.max(...consonants.values())
    : 0;

  return maxVowelCount + maxConsonantsCount;
};
