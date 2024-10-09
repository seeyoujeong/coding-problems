/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let start = 0;
  let end = s.length - 1;
  const sArr = [...s];

  while (start < end) {
    const isEngStart = isEng(sArr[start]);
    const isEngEnd = isEng(sArr[end]);

    if (isEngStart && isEngEnd) {
      const temp = sArr[start];
      sArr[start] = sArr[end];
      sArr[end] = temp;
      start++;
      end--;
    } else if (isEngStart) {
      end--;
    } else if (isEngEnd) {
      start++;
    } else {
      start++;
      end--;
    }
  }

  return sArr.join("");
};

function isEng(char) {
  return /[a-z]/i.test(char);
}
