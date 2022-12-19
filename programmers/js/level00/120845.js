// 주사위의 개수
function solution(box, n) {
  return box.reduce((acc, cur) => acc * parseInt(cur / n), 1);
}