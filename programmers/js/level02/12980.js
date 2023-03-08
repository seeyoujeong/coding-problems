// 점프와 순간 이동
function solution(n) {
  let answer = 0;

  while (n !== 0) {
    if (n % 2 !== 0) {
      answer++;
      n--;
    }

    n /= 2;
  }

  return answer;
}

// 다른 풀이
// function solution(n) {
//   return [...n.toString(2)].reduce((acc, cur) => acc + +cur, 0);
// }