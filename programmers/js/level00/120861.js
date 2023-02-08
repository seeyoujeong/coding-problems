// 캐릭터의 좌표
function solution(keyinput, board) {
  let [x, y] = [0, 0];
  const w = parseInt(board[0] / 2);
  const h = parseInt(board[1] / 2);
  
  keyinput.forEach(key => {
    if (key === 'left' && -w < x) {
      x--;
    } else if (key === 'right' && w > x) {
      x++;
    } else if (key === 'up' && h > y) {
      y++;
    } else if (key === 'down' && -h < y) {
      y--;
    }
  });
  
  return [x, y];
}