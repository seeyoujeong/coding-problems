// 명예의 전당 (1)
function solution(k, score) {
  const hof = [];
  
  return score.map(s => {
    hof.push(s);
    hof.sort((a, b) => b - a);
    
    if (hof.length > k) {
      hof.pop();
    }
    
    return hof.at(-1);
  });
}
