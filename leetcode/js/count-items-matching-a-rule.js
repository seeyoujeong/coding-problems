/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const keyNum = {
    type: 0,
    color: 1,
    name: 2,
  };

  return items.filter((item) => item[keyNum[ruleKey]] === ruleValue).length;
};
