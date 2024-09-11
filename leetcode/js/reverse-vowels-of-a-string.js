/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const result = [...s];
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (set.has(result[left]) && set.has(result[right])) {
      [result[left], result[right]] = [result[right], result[left]];
      left++;
      right--;
    } else if (!set.has(result[left]) && set.has(result[right])) {
      left++;
    } else if (set.has(result[left]) && !set.has(result[right])) {
      right--;
    } else {
      left++;
      right--;
    }
  }

  return result.join("");
};
