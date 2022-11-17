// 안전지대
function solution(board) {
  var answer = 0;
  const check = i => i === 1 ? 1 : -1;
  
  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board.length - 1; j++) {
      const tmp = [board[i][j], board[i][j + 1], board[i + 1][j], board[i + 1][j + 1]];
      if (tmp.some(v => v === 1)) {
        board[i][j] = check(board[i][j]);
        board[i][j + 1] = check(board[i][j + 1]);
        board[i + 1][j] = check(board[i + 1][j]);
        board[i + 1][j + 1] = check(board[i + 1][j + 1]);
      } 
    }
    answer += board[i].filter(v => v === 0).length;
  }
  
  answer += board.at(-1).filter(v => v === 0).length;
  
  return answer;
}