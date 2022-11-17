// 직사각형 넓이 구하기
function solution(dots) {
  var answer = 1;

  for (let i = 0; i <= 1; i++) {
    dots.sort((a, b) => a[i] - b[i]);
    answer *= dots[3][i] - dots[0][i];
  }

  return answer;
}

// 다른 풀이
// function solution(dots) {
//   let x = [];
//   let y = [];

//   for (let pos of dots) {
//     x.push(pos[0]);
//     y.push(pos[1]);
//   }

//   return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
// }