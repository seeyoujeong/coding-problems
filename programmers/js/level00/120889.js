// 삼각형의 완성조건 (1)
function solution(sides) {
  sides.sort((a, b) => b - a);

  return sides[1] + sides[2] > sides[0] ? 1 : 2;
}