// 등수 매기기
function solution(score) {
  const scoreAvg = score.map(([eng, math]) => (eng + math) / 2);
  const avgRank = [...scoreAvg].sort((a, b) => b - a);
  
  return scoreAvg.map(score => avgRank.indexOf(score) + 1);
}

// 다른 풀이
// function solution(score) {
//   return score.map((el) => score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1);
// }