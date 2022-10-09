// 아이스 아메리카노
function solution(money) {
  var answer = [];
  const coffee = parseInt(money / 5500);

  answer.push(coffee);
  answer.push(money - 5500 * coffee);

  return answer;
}