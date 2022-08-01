// 자연수 뒤집어 배열로 만들기

function solution(n) {
  var answer = [];
  var strNum = String(n);
  
  // for (let i of strNum) {
  //     answer.unshift(+i);
  // }
  
  strNum.split('').reverse().forEach(str => answer.push(+str));
  
  return answer;
}