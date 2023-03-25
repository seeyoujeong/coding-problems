// 공원 산책
function solution(park, routes) {
  const start = park.join("").indexOf("S");
  const [parkX, parkY] = [park[0].length, park.length];
  let [currentX, currentY] = [start % parkX, Math.floor(start / parkX)];
  const obstacle = [...park.join("")].reduce((acc, cur, idx) => {
    if (cur === "X") {
      acc.push([idx % parkX, Math.floor(idx / parkX)]);
    }

    return acc;
  }, []);

  for (const route of routes) {
    const [direction, distance] = route.split(" ");
    let flag = false;

    if (direction === "N") {
      if (currentY - +distance < 0) {
        continue;
      }

      for (const [x, y] of obstacle) {
        if (currentX === x && currentY >= y && currentY - +distance <= y) {
          flag = true;
          break;
        }
      }

      if (flag) {
        continue;
      }

      currentY -= +distance;
    }

    if (direction === "S") {
      if (currentY + +distance > parkY - 1) {
        continue;
      }

      for (const [x, y] of obstacle) {
        if (currentX === x && currentY <= y && currentY + +distance >= y) {
          flag = true;
          break;
        }
      }

      if (flag) {
        continue;
      }

      currentY += +distance;
    }

    if (direction === "W") {
      if (currentX - +distance < 0) {
        continue;
      }

      for (const [x, y] of obstacle) {
        if (currentY === y && currentX >= x && currentX - +distance <= x) {
          flag = true;
          break;
        }
      }

      if (flag) {
        continue;
      }

      currentX -= +distance;
    }

    if (direction === "E") {
      if (currentX + +distance > parkX - 1) {
        continue;
      }

      for (const [x, y] of obstacle) {
        if (currentY === y && currentX <= x && currentX + +distance >= x) {
          flag = true;
          break;
        }
      }

      if (flag) {
        continue;
      }

      currentX += +distance;
    }
  }

  return [currentY, currentX];
}


// 다른 풀이
// function solution(park, routes) {
//   const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
//   let [x, y] = [0, 0];
//   for (let i = 0; i < park.length; i++) {
//     if (park[i].includes('S')) {
//       [x, y] = [i, park[i].indexOf('S')];
//       break;
//     }
//   }

//   routes.forEach((route) => {
//     const [r, n] = route.split(' ');
//     let [nx, ny] = [x, y];
//     let cnt = 0;
//     while (cnt < n) {
//       [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
//       if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') break;
//       cnt++;
//     }
//     if (cnt == n) [x, y] = [nx, ny];
//   });
//   return [x, y];
// }