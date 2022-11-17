// 캐릭터의 좌표
function solution(keyinput, board) {
  var answer = [0, 0];
  const w = parseInt(board[0] / 2);
  const h = parseInt(board[1] / 2);

  keyinput.forEach(key => {
    if (key === 'left' && -w < answer[0]) {
      answer[0]--;
    } else if (key === 'right' && w > answer[0]) {
      answer[0]++;
    } else if (key === 'up' && h > answer[1]) {
      answer[1]++;
    } else if (key === 'down' && -h < answer[1]) {
      answer[1]--;
    }
  });

  return answer;
}