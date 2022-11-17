// 머쓱이보다 키 큰 사람
function solution(array, height) {
  var answer = 0;

  answer = array.filter(value => value > height).length;

  return answer;
}