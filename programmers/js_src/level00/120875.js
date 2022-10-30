// 평행
function solution(dots) {
  var answer = 0;
  const arr = [];

  for (let i = 0; i < dots.length - 1; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const x = dots[i][0] - dots[j][0];
      const y = dots[i][1] - dots[j][1];

      if (arr.includes(y / x)) {
        answer = 1;
      } else {
        arr.push(y / x);
      }
    }
  }

  return answer;
}