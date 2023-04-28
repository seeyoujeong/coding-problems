// 방문 길이
function solution(dirs) {
  const record = new Set();
  let coordinate = [0, 0];
  const recording = (prevCoord, coord) => {
    record.add(prevCoord + coord);
    record.add(coord + prevCoord);
  };

  for (let dir of dirs) {
    let prevCoordinate = coordinate.join("");

    if (dir === "U") {
      if (coordinate[1] === 5) continue;
      coordinate[1]++;
    } else if (dir === "D") {
      if (coordinate[1] === -5) continue;
      coordinate[1]--;
    } else if (dir === "R") {
      if (coordinate[0] === 5) continue;
      coordinate[0]++;
    } else if (dir === "L") {
      if (coordinate[0] === -5) continue;
      coordinate[0]--;
    }

    recording(prevCoordinate, coordinate.join(""));
  }

  return record.size / 2;
}
