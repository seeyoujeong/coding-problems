// 숫자 찾기
function solution(num, k) {
  const index = String(num).indexOf(String(k));
  
  return ~index ? index + 1 : -1;
}

// 다른 풀이
function solution(num, k) {
  return String(num).indexOf(String(k)) + 1 || -1;
}