/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let result = 0;
  let completedIdx = 0;
  let curWater = capacity;
  let curIdx = -1;

  while (completedIdx < plants.length) {
    if (plants[completedIdx] <= curWater) {
      result += completedIdx - curIdx;
      curIdx = completedIdx;
      curWater -= plants[completedIdx];
      completedIdx++;
    } else {
      curIdx = -1;
      result += completedIdx;
      curWater = capacity;
    }
  }

  return result;
};
