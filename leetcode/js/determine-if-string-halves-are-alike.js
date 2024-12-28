/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = "aeiouAEIOU";

  const half = s.length / 2;
  const a = s.slice(0, half);
  const b = s.slice(half);

  let countA = 0;
  let countB = 0;

  for (let i = 0; i < half; i++) {
    if (vowels.includes(a[i])) countA++;
    if (vowels.includes(b[i])) countB++;
  }

  return countA === countB;
};
