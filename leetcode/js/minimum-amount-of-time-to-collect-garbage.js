/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let result = 0;

  for (const type of ["G", "P", "M"]) {
    let curIdx = 0;

    garbage.forEach((g, idx) => {
      if (g.includes(type)) {
        result += [...g].filter((v) => v === type).length;
        curIdx = idx;
      }
    });

    result += travel.slice(0, curIdx).reduce((acc, cur) => acc + cur, 0);
  }

  return result;
};
