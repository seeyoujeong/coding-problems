/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const sizeObj = groupSizes.reduce((acc, cur, idx) => {
    if (cur in acc) {
      acc[cur].push(idx);
    } else {
      acc[cur] = [idx];
    }

    return acc;
  }, {});

  const result = [];

  for (const size in sizeObj) {
    let group = [];

    for (const id of sizeObj[size]) {
      if (group.length < Number(size)) {
        group.push(id);
      } else {
        result.push(group);
        group = [id];
      }
    }

    if (group.length > 0) {
      result.push(group);
    }
  }

  return result;
};

var groupThePeople = function (groupSizes) {
  const result = [];
  const sizeMap = new Map();

  for (let i = 0; i < groupSizes.length; i++) {
    const curSize = groupSizes[i];

    if (sizeMap.has(curSize)) {
      sizeMap.get(curSize).push(i);
    } else {
      sizeMap.set(curSize, [i]);
    }

    if (sizeMap.get(curSize).length === curSize) {
      result.push(sizeMap.get(curSize));
      sizeMap.delete(curSize);
    }
  }

  return result;
};
