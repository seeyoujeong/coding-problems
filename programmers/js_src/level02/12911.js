// 다음 큰 숫자
function solution(n) {
  var answer = n;
  let countOne = num => num.toString(2).match(/1/g).length;

  while (true) {
    answer++;

    if (countOne(n) == countOne(answer)) {
      break;
    }
  }

  return answer;
}