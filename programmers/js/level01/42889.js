// 실패율
function solution(N, stages) {
  var answer = [];
  const failureRate = {};

  for (let i = 1; i <= N; i++) {
    let f = stages.filter(stage => i == stage).length;
    let c = stages.filter(stage => i <= stage).length;

    failureRate[i] = f / c;
  }

  answer = Object.entries(failureRate);

  answer.sort((a, b) => b[1] - a[1]);

  answer = answer.map(a => +a[0]);

  return answer;
}

// 다른 풀이
// function solution(N, stages) {
//   let result = [];

//   for(let i = 1; i <= N; i++){
//     let reach = stages.filter((x) => x >= i).length;
//     let curr = stages.filter((x) => x === i).length;

//     result.push([i, curr / reach]);
//   }

//   result.sort((a, b) => b[1] - a[1]);

//   return result.map((x) => x[0]);
// }