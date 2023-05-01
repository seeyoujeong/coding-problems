// 이차원 배열 대각선 순회하기
function solution(board, k) {
  return board.reduce((acc, cur, i) => {
    cur.forEach((num, j) => {
      if (i + j <= k) {
        acc += num;
      }
    });

    return acc;
  }, 0);
}
