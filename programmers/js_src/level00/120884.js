// 치킨 쿠폰
function solution(chicken) {
  var answer = 0;

  while (chicken >= 10) {
    const tmp = parseInt(chicken / 10);
    answer += tmp;
    chicken = tmp + (chicken % 10);
  }

  return answer;
}