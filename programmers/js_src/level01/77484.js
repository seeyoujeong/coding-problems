// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  var answer = [];
  let count0 = 0;
  let countWinNums = 0;

  for (let num of lottos) {
    if (num == 0) {
      count0++;
    }

    if (win_nums.includes(num)) {
      countWinNums++;
    }
  }

  if (countWinNums == 0) {
    if (count0 == 0) {
      answer = [6, 6];
    } else {
      answer = [1, 6];
    }
  } else {
    answer = [7 - countWinNums - count0, 7 - countWinNums];
  }

  return answer;
}

// 다른 풀이
// function solution(lottos, win_nums) {
//   const rank = [6, 6, 5, 4, 3, 2, 1];

//   let minCount = lottos.filter(v => win_nums.includes(v)).length;
//   let zeroCount = lottos.filter(v => !v).length;

//   const maxCount = minCount + zeroCount;

//   return [rank[maxCount], rank[minCount]];
// }