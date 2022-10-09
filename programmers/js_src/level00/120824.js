// 짝수 홀수 개수
function solution(num_list) {
  var answer = [0, 0];
  
  num_list.forEach(num => {
    if (num % 2 == 0) {
      answer[0]++;
    } else {
      answer[1]++;
    }
  });
  
  return answer;
}