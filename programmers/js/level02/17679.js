// [1차] 프렌즈4블록
function solution(m, n, board) {
  const BLANK_BLOCK = "x";
  let curBoard = board.map((block) => [...block]);
  let nextBoard = board.map((block) => [...block]);
  let count;

  do {
    count = 0;

    for (let col = 0; col < m - 1; col++) {
      for (let row = 0; row < n - 1; row++) {
        const block = curBoard[col][row];

        if (block === BLANK_BLOCK) continue;
        if (
          block === curBoard[col][row + 1] &&
          block === curBoard[col + 1][row] &&
          block === curBoard[col + 1][row + 1]
        ) {
          nextBoard[col][row] = BLANK_BLOCK;
          nextBoard[col + 1][row] = BLANK_BLOCK;
          nextBoard[col][row + 1] = BLANK_BLOCK;
          nextBoard[col + 1][row + 1] = BLANK_BLOCK;
          count += 1;
        }
      }
    }

    for (let col = 0; col < m - 1; col++) {
      for (let row = 0; row < n; row++) {
        if (nextBoard[col + 1][row] === BLANK_BLOCK) {
          for (let i = col; i >= 0; i--) {
            nextBoard[i + 1][row] = nextBoard[i][row];
            nextBoard[i][row] = BLANK_BLOCK;
          }
        }
      }
    }

    curBoard = nextBoard.map((block) => [...block]);
  } while (count);

  return nextBoard.flat().filter((block) => block === BLANK_BLOCK).length;
}
