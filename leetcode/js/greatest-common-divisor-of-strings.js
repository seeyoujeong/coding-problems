/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let result = "";
  const minStr = str1.length < str2.length ? str1 : str2;
  const maxStr = str1.length >= str2.length ? str1 : str2;

  for (let i = minStr.length; i >= 0; i--) {
    result = minStr.slice(0, i);
    const replacedMin = minStr.replaceAll(result, "");
    const replacedMax = maxStr.replaceAll(result, "");

    if (replacedMin.length === 0 && replacedMax.length === 0) {
      break;
    }

    if (replacedMax.length === maxStr.length) {
      return "";
    }
  }

  return result;
};

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  let a = str1.length;
  let b = str2.length;

  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return str1.slice(0, a);
};
