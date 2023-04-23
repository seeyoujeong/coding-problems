// 콜라츠 수열 만들기
function solution(n) {
  const result = [];

  while (true) {
    result.push(n);

    if (n === 1) {
      break;
    }

    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
  }

  return result;
}
