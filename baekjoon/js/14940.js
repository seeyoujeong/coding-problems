const fs = require("fs");
const buf = fs.readFileSync(0, "utf-8").toString().trim();

const [size, ...inputs] = buf.split("\n");
const [maxY, maxX] = size.split(" ").map(Number);
const graph = inputs.map((input) => input.split(" "));

let startX = 0;
let startY = 0;

for (let i = 0; i < maxY; i++) {
  let flag = false;

  for (let j = 0; j < maxX; j++) {
    if (graph[i][j] === "2") {
      startX = j;
      startY = i;
      flag = true;
      break;
    }
  }

  if (flag) break;
}

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

graph[startY][startX] = 0;
const queue = [[startY, startX]];

while (queue.length > 0) {
  const [curY, curX] = queue.shift();

  for (const [y, x] of dir) {
    const [nextY, nextX] = [curY + y, curX + x];

    if (nextX >= 0 && nextY >= 0 && nextX < maxX && nextY < maxY) {
      if (graph[nextY][nextX] === "1") {
        graph[nextY][nextX] = graph[curY][curX] + 1;
        queue.push([nextY, nextX]);
      }
    }
  }
}

for (let i = 0; i < maxY; i++) {
  for (let j = 0; j < maxX; j++) {
    if (graph[i][j] === "1") {
      graph[i][j] = -1;
    }
  }
}

const result = graph.map((row) => row.join(" ")).join("\n");

console.log(result);
