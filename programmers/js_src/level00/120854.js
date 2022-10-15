// 배열 원소의 길이
function solution(strlist) {
  var answer = [];
  
  strlist.forEach(str => {
    answer.push(str.length);
  });
  
  return answer;
}