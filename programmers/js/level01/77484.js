// 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  let count0 = 0;
  let countWinNums = 0;
  
  lottos.forEach(num => num ? 
    win_nums.includes(num) && countWinNums++ : count0++
  );
  
  return countWinNums ? 
    [7 - countWinNums - count0, 7 - countWinNums] : 
    count0 ? [1, 6] : [6, 6];
}

// 다른 풀이
// function solution(lottos, win_nums) {
//   const rank = [6, 6, 5, 4, 3, 2, 1];

//   let minCount = lottos.filter(v => win_nums.includes(v)).length;
//   let zeroCount = lottos.filter(v => !v).length;

//   const maxCount = minCount + zeroCount;

//   return [rank[maxCount], rank[minCount]];
// }