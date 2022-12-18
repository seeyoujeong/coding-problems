// 진료순서 정하기
function solution(emergency) {
  const sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map(order => sorted.indexOf(order) + 1);
}