// 안전지대
function solution(board) {
  const MINE = 1;
  const SAFE_AREA = 0;
  const NOT_SAFE_AREA = -1
  const check = area => area === MINE ? MINE : NOT_SAFE_AREA;
  
  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board.length - 1; j++) {
      const areas = [board[i][j], board[i][j + 1], 
                     board[i + 1][j], board[i + 1][j + 1]];
      
      if (areas.some(area => area === MINE)) {
        board[i][j] = check(board[i][j]);
        board[i][j + 1] = check(board[i][j + 1]);
        board[i + 1][j] = check(board[i + 1][j]);
        board[i + 1][j + 1] = check(board[i + 1][j + 1]);
      } 
    }
  }
  
  return board.flat().filter(area => area === SAFE_AREA).length;
}