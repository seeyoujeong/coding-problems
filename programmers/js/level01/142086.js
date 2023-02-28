// 가장 가까운 같은 글자
function solution(s) {
  const memory = {};
  
  return [...s].map((char, idx) => {
    const result = char in memory ? idx - memory[char] : -1;
    
    memory[char] = idx;
    
    return result;
  });
}
