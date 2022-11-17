// 크레인 인형뽑기 게임
function solution(board, moves) {
  var answer = 0;
  let arr = [];

  for (let col of moves) {
    for (let row of board) {
      if (row[col - 1] != 0) {
        arr.push(row[col - 1]);
        row[col - 1] = 0;
        break;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      answer += 2;
      arr.splice(i - 1, 2);
      i = 0;
    } 
  }

  return answer;
}