// 자연수 뒤집어 배열로 만들기
function solution(n) {
  var answer = [];
  var strNum = String(n);
  
  strNum.split('').reverse().forEach(str => answer.push(+str));
  
  return answer;
}