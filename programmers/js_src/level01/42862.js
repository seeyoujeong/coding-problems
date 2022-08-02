// 체육복

function solution(n, lost, reserve) {
  var answer = 0;

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let _reserve = reserve.filter(num => !lost.includes(num));
  let _lost = lost.filter(num => !reserve.includes(num));

  answer = n - _lost.length;

  for (let num of _reserve) {
    if (_lost.includes(num - 1)) {
      _lost.splice(_lost.indexOf(num - 1), 1)
      answer++;
    } else if (_lost.includes(num + 1)) {
      _lost.splice(_lost.indexOf(num + 1), 1)
      answer++;
    }
  }

  return answer;
}

// 다른 풀이
// function solution(n, lost, reserve) {
//   const students = {};
//   let answer = 0;
//   for(let i = 1; i <= n; i++){
//     students[i] = 1;
//   }
//   lost.forEach(number => students[number] -= 1);
//   reserve.forEach(number => students[number] += 1);

//   for(let i = 1; i <= n; i++){
//     if (students[i] === 2 && students[i - 1] === 0){
//       students[i - 1]++;
//       students[i]--;
//     } else if (students[i] === 2 && students[i + 1] === 0){
//       students[i + 1]++;
//       students[i]--;
//     }
//   }
//   for(let key in students){
//       if(students[key] >= 1){
//           answer++;
//       }
//   }
//   return answer;
// }