/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const indexSums = [];
  let min = list1.length + list2.length;

  list1.forEach((val, idx) => {
    const list2Idx = list2.indexOf(val);

    if (list2Idx !== -1) {
      indexSums.push([val, idx + list2Idx]);
      min = Math.min(min, idx + list2Idx);
    }
  });

  return indexSums.filter(([k, v]) => v === min).map(([k]) => k);
};
