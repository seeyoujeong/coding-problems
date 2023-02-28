// 크기가 작은 부분 문자열
function solution(t, p) {
  let count = 0;
  const pLen = p.length;
  
  for (let i = 0; i <= t.length - pLen; i++) { 
    if (t.slice(i, i + pLen) <= p) {
      count++;
    }
  }
  
  return count;
}
