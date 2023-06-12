// N-Queen
function solution(n) {
  return search(Array(n).fill(0), 0, n);
}

function search(queen, row, n) {
  let count = 0;

  if (row === n) {
    return 1;
  }

  for (let col = 0; col < n; col += 1) {
    queen[row] = col;

    if (check(queen, row)) {
      count += search(queen, row + 1, n);
    }
  }

  return count;
}

function check(queen, row) {
  for (let i = 0; i < row; i += 1) {
    if (
      queen[i] === queen[row] ||
      Math.abs(queen[i] - queen[row]) === row - i
    ) {
      return false;
    }
  }

  return true;
}

// 데브코스
// function solution(n) {
//   return search(Array(n).fill(0), 0);
// }

// function search(queen, row) {
//   const n = queen.length;
//   let count = 0;

//   if (n === row) {
//     return 1;
//   }

//   for (let col = 0; col < n; col += 1) {
//     queen[row] = col;

//     if (check(queen, row)) {
//       count += search(queen, row + 1);
//     }
//   }

//   return count;
// }

// function check(queen, row) {
//   for (let i = 0; i < row; i += 1) {
//     if (
//       queen[i] === queen[row] ||
//       Math.abs(queen[i] - queen[row]) === row - i
//     ) {
//       return false;
//     }
//   }

//   return true;
// }
