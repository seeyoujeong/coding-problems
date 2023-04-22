// 주사위 게임 2
function solution(a, b, c) {
  let answer = a + b + c;

  if (a !== b && b !== c && c !== a) {
    return answer;
  }

  answer *= a ** 2 + b ** 2 + c ** 2;

  if ((a === b && b !== c) || (b === c && c !== a) || (c === a && a !== b)) {
    return answer;
  }

  answer *= a ** 3 + b ** 3 + c ** 3;

  if (a === b && b === c) {
    return answer;
  }
}
