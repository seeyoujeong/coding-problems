// 이차원 배열 대각선 순회하기
function solution(board, k) {
  return board
    .filter((_, i) => i <= k)
    .flatMap((arr, i) => arr.filter((_, j) => i + j <= k))
    .reduce((acc, cur) => acc + cur, 0);
}
