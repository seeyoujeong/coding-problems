// 푸드 파이트 대회
function solution(food) {    
  const answer = food
    .slice(1)
    .map(elem => ~~(elem / 2))
    .reduce((acc, cur, idx) => acc + `${idx + 1}`.repeat(cur), '');
  
  return answer + '0' + [...answer].reverse().join('');
}
