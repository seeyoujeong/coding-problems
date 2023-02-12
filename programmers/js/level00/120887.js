// k의 개수
function solution(i, j, k) {
  let numbers = '';
  
  for (let x = i; x <= j; x++) {
    numbers += String(x);
  }
  
  return [...numbers].filter(v => v == k).length;
}