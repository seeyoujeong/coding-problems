// 기능개발
function solution(progresses, speeds) {
  var answer = [];
  let elapsedTime = progresses.map((elem, index) => Math.ceil((100 - elem) / speeds[index]));
  let count = 1;
  let tmp = elapsedTime[0];
  
  for (let i = 1; i < elapsedTime.length; i++) {
    if (tmp >= elapsedTime[i]) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      tmp = elapsedTime[i];
    }  
  }
  
  answer.push(count);
  
  return answer;
}


// 다른 풀이
// function solution(progresses, speeds) {
//   var answer = [];
//   const remainDays = progresses.map((prog, index)=> Math.ceil((100 - prog) / speeds[index]));
//   let maxDay = remainDays[0];
//   answer.push(0);

//   for (let i = 0; i < remainDays.length; i++) {
//     if (remainDays[i] <= maxDay) {
//       answer[answer.length - 1] += 1;
//     } else {
//       answer.push(1);
//       maxDay = remainDays[i];
//     }
//   }

//   return answer;
// }