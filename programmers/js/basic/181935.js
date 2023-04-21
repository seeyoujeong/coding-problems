// 홀짝에 따라 다른 값 반환하기
function solution(n) {
  if (n % 2 === 0) {
    return Array.from({ length: n / 2 }, (_, i) => (i + 1) * 2).reduce(
      (acc, cur) => acc + cur ** 2,
      0
    );
  } else {
    return Array.from({ length: Math.ceil(n / 2) }, (_, i) => i * 2 + 1).reduce(
      (acc, cur) => acc + cur,
      0
    );
  }
}

// 다른 풀이
// function solution(n) {
//   if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
//   else return (n * (n + 1) * (n + 2)) / 6;
// }
