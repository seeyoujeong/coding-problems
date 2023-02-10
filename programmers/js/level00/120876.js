// 겹치는 선분의 길이
function solution(lines) {
  const overlap = {};
  
  lines.forEach(line => {
    for (let i = line[0]; i < line[1]; i++) {
      const ln = `[${i}, ${i + 1}]`;
      
      overlap[ln] = overlap[ln] ? overlap[ln] += 1 : 1;
    }
  });
  
  return Object.values(overlap).filter(val => val > 1).length;
}

// 실패
// function solution(lines) {
//   var answer = 0;
//   const arr = [];
  
//   lines.forEach(line => {
//     const tmp = [];
//     for (let i = Math.min(...line); i <= Math.max(...line); i++) {
//       tmp.push(i);
//     }
//     arr.push(tmp);
//   });
  
//   arr.sort((a, b) => a.length - b.length);

//   const result = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const tmp = [];
//       for (let k = 0; k < arr[i].length; k++) {
//         if (k === 0 && arr[i][k] === arr[j].at(-1)) {
//           continue;
//         }
        
//         if (k === arr[i].length - 1 && arr[i][k] === arr[j][0]) {
//           continue;
//         }
        
//         if (arr[j].includes(arr[i][k])) {
//           tmp.push(arr[i][k]);
//         }
//       }
//       result.push(tmp);
//     }
//   }
  
//   for (let i = 0; i < result.length - 1; i++) {
//     if (result[i].length > 0) {
//       if (result[i + 1].includes(result[i].at(-1))) {
//         result[i + 1] = [...new Set([...result[i], ...result[i + 1]])].sort((a, b) => a - b);
//         result[i] = [];
//       }
//     }
//   }
  
//   answer = result.reduce((acc, cur) => acc + (cur.length > 0 ? cur.length - 1 : 0), 0);
  
//   return answer;
// }