// 가운데 글자 가져오기
function solution(s) {
  const lenDiv2 = Math.floor(s.length / 2);
  
  return s.length % 2 === 0 ? 
    s.slice(lenDiv2 - 1, lenDiv2 + 1) : 
    s.at(lenDiv2);
}