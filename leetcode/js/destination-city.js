/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const pathsMap = new Map(paths);

  for (let city of pathsMap.values()) {
    let count = 1;

    while (pathsMap.has(city)) {
      city = pathsMap.get(city);
      count++;
    }

    if (count === paths.length) {
      return city;
    }
  }
};
