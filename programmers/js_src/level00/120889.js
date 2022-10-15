// 삼각형의 완성조건 (1)
function solution(sides) {
  var answer = 0;

  sides.sort((a, b) => b - a);

  if (sides[1] + sides[2] > sides[0]) {
    answer = 1;
  } else {
    answer = 2;
  }

  return answer;
}