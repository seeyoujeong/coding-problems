// 서울에서 김서방 찾기
function solution(seoul) {
  var answer = '';

  answer = `김서방은 ${seoul.findIndex(arr => arr == "Kim")}에 있다`;

  return answer;
}