// 삼각형의 완성조건 (2)
function solution(sides) {
  const min = Math.min(...sides);
  const max = Math.max(...sides);
  const sum = max + min;
  
  return sum - max + min - 1;
}

// 다른 풀이
// function solution(sides) {
//   return Math.min(...sides) * 2 - 1;
// }