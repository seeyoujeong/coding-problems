// 주사위의 개수
function solution(box, n) {
  var answer = 1;

  box.forEach(value => {
    answer *= parseInt(value / n);
  });

  return answer;
}