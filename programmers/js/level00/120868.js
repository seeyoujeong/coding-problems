// 삼각형의 완성조건 (2)
function solution(sides) {
  var answer = 0;
  const min = Math.min(...sides);
  const max = Math.max(...sides);
  const sum = sides.reduce((acc, cur) => acc + cur, 0);

  for (let i = max - min + 1; i <= max; i++) {
    answer++;
  }

  for (let i = max + 1; i < sum; i++) {
    answer++;
  }

  return answer;
}

// 다른 풀이
// function solution(sides) {
//   return Math.min(...sides) * 2 - 1;
// }