/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let result = letters[0];

  for (let i = 0; i < letters.length; i++) {
    const cur = letters[i];

    if (cur > target) {
      result = cur;
      break;
    }
  }

  return result;
};

var nextGreatestLetter = function (letters, target) {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start < letters.length ? letters[start] : letters[0];
};
