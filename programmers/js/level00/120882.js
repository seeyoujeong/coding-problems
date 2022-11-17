// 등수 매기기
function solution(score) {
  var answer = [];
  const scoreAvg = score.map(([eng, math]) => (eng + math) / 2);
  const avgRank = scoreAvg.slice().sort((a, b) => b - a);
  
  scoreAvg.forEach(score => {
    answer.push(avgRank.indexOf(score) + 1);
  });
  
  return answer;
}