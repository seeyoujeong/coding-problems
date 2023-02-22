// 크레인 인형뽑기 게임
function solution(board, moves) {
  let answer = 0;
  const bucket = [];
  
  for (let col of moves) {
    for (let row of board) {
      if (row[col - 1] !== 0) {
        bucket.push(row[col - 1]);
        row[col - 1] = 0;
        break;
      }
    }
    
    if (bucket.length > 1 && bucket.at(-1) === bucket.at(-2)) {
      bucket.pop();
      bucket.pop();
      answer += 2;
    }
  }
  
  return answer;
}

// 다른 풀이
// function solution(board, moves) {
//   const stacks = transpose(board).map(row =>
//     row.reverse().filter(el => el !== 0)
//   );
//   const basket = [];
//   let result = 0;

//   for (const move of moves) {
//     const pop = stacks[move - 1].pop();
//     if (!pop) continue;
//     if (pop === basket[basket.length - 1]) {
//       basket.pop();
//       result += 2;
//       continue;
//     }
//     basket.push(pop);
//   }

//   return result;
// }

// function transpose(matrix) {
//   return matrix.reduce((result, row) => 
//     row.map((_, i) => [...(result[i] || []), row[i]]), []);
// }