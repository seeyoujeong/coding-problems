/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  const convertWordToNum = (word) => {
    return parseInt(
      [...word].map((c) => String(c.charCodeAt(0) - 97)).join(""),
      10
    );
  };

  const firstNum = convertWordToNum(firstWord);
  const secondNum = convertWordToNum(secondWord);

  const targetNum = convertWordToNum(targetWord);

  return firstNum + secondNum === targetNum;
};
