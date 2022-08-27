function solution(dirs) {
  var answer = 0;
  let record = new Set();
  let coordinate = [0, 0];
  const recording = (prCoord, coord) => {
    record.add(prCoord + coord);
    record.add(coord + prCoord);
  };

  for (let dir of dirs) {
    let priorCoordinate;

    if (dir == 'U') {
      if (coordinate[1] == 5) continue;
      priorCoordinate = coordinate.join('');
      coordinate[1]++;
      recording(priorCoordinate, coordinate.join(''));
    } else if (dir == 'D') {
      if (coordinate[1] == -5) continue;
      priorCoordinate = coordinate.join('');
      coordinate[1]--;
      recording(priorCoordinate, coordinate.join(''));
    } else if (dir == 'R') {
      if (coordinate[0] == 5) continue;
      priorCoordinate = coordinate.join('');
      coordinate[0]++;
      recording(priorCoordinate, coordinate.join(''));
    } else if (dir == 'L') {
      if (coordinate[0] == -5) continue;
      priorCoordinate = coordinate.join('');
      coordinate[0]--;
      recording(priorCoordinate, coordinate.join(''));
    }
  }

  answer = record.size / 2;

  return answer;
}