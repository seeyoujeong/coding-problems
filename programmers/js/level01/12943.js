// 콜라츠 추측
function solution(num) {
  let count = 0;
  
  if (num === 1) {
    return count;
  }
  
  while (count <= 500) {
    num = num % 2 ? num * 3 + 1 : num / 2;
    
    count++;
    
    if (num === 1) {
      return count;
    }
  }
  
  return -1;
}

// 다른 풀이
// function solution(num,count = 0) {
//   return num == 1 ? (count >= 500 ? -1 : count) : solution(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
// }