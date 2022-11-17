// 문자열 정렬하기 (2)
function solution(my_string) {
  var answer = '';
  
  answer = my_string.toLowerCase().split('').sort().join('');
  
  return answer;
}