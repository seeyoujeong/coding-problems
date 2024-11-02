/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  const result = [];
  const [rc1, rc2] = s.split(":");
  const startCode = rc1.charCodeAt(0);
  const endCode = rc2.charCodeAt(0);
  const startRow = Number(rc1[1]);
  const endRow = Number(rc2[1]);

  for (let i = startCode; i <= endCode; i++) {
    for (let j = startRow; j <= endRow; j++) {
      result.push(String.fromCharCode(i) + j);
    }
  }

  return result;
};
