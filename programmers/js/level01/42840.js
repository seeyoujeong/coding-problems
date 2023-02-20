// 모의고사
function solution(answers) {
  const answer = [];
  const spjAnswers = [[1, 2, 3, 4, 5],
                      [2, 1, 2, 3, 2, 4, 2, 5],
                      [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  const spjAnsLen = spjAnswers.map(arr => arr.length);
  const count = Array(spjAnswers.length).fill(0);
  
  answers.forEach((ans, idx) => {
    spjAnswers.forEach((spjAns, spjNum) => {
      if (ans === spjAns[idx % spjAnsLen[spjNum]]) count[spjNum]++;
    });
  });
  
  const max = Math.max(...count);
  
  count.forEach((num, idx) => {
    if (num === max) answer.push(idx + 1);
  });
  
  return answer;
}

// 다른 풀이
// function solution(answers) {
//   const answer = [];
//   const spj1 = [1, 2, 3, 4, 5];
//   const spj2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const spj3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//   const countAnswers = spj => {
//     const spjLen = spj.length;
    
//     return answers
//       .filter((ans, idx) => ans === spj[idx % spjLen]).length;
//   };
  
//   const spj1Count = countAnswers(spj1);
//   const spj2Count = countAnswers(spj2);
//   const spj3Count = countAnswers(spj3);
//   const max = Math.max(spj1Count, spj2Count, spj3Count);
  
//   if (spj1Count === max) answer.push(1);
//   if (spj2Count === max) answer.push(2);
//   if (spj3Count === max) answer.push(3);
  
//   return answer;
// }