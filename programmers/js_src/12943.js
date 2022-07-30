// 콜라츠 추측

function solution(num) {
  var answer = 0;
  var count = 0;
  
  if (num == 1) {
    return answer;
  }
  
  while (count <= 500) {
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    
    count++;
    
    if (num == 1) {
      answer = count;
      return answer;
    }
  }
  
  answer = -1;
  return answer;
}

// 다른 풀이
// function solution(num,count = 0) {
//   return num == 1 ? (count >= 500 ? -1 : count) : solution(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
// }