/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let count = s.slice(0, k).replace(/[^aeiou]/g, "").length;
  let max = count;

  if (max === k) {
    return max;
  }

  const set = new Set(["a", "e", "i", "o", "u"]);

  for (let i = k; i < s.length; i++) {
    if (set.has(s[i - k])) {
      count--;
    }

    if (set.has(s[i])) {
      count++;
    }

    max = Math.max(max, count);

    if (max === k) {
      break;
    }
  }

  return max;
};
