// 최댓값과 최솟값
function solution(s) {
  s = s.split(' ');

  return `${Math.min(...s)} ${Math.max(...s)}`;
}
