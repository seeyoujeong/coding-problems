// 성격 유형 검사하기
function solution(survey, choices) {
  let answer = '';
  const category = {
      R: 0,
      T: 0,
      C: 0,
      F: 0,
      J: 0,
      M: 0,
      A: 0,
      N: 0,
  };

  for (let i = 0; i < choices.length; i++) {
    if (choices[i] < 4) {
      category[survey[i][0]] += 4 - choices[i];
    }

    if (choices[i] > 4) {
      category[survey[i][1]] += choices[i] - 4;
    }
  }
    
  const categoryKeys = Object.keys(category);

  for (let i = 1; i < categoryKeys.length; i += 2) {
    const [key1, key2] = [categoryKeys[i - 1], categoryKeys[i]];
    answer += category[key1] >= category[key2] ? key1 : key2;
  }

  return answer;
}

// 다른 풀이
// function solution(survey, choices) {
//   var answer = '';
//   let indi = new Map();
//   ['R','T', 'C','F', 'J','M', 'A', 'N'].forEach(item => indi.set(item, 0));

//   choices.forEach((item,index) => {
//     let [A, B] = survey[index].split('');
//     if(item > 4) {
//       indi.set(B, indi.get(B) + item - 4);
//     } else if (item < 4) {
//       indi.set(A, indi.get(A) + 4 - item);
//     } 
//   });

//   answer += indi.get('R') >= indi.get('T') ? 'R' : 'T';
//   answer += indi.get('C') >= indi.get('F') ? 'C' : 'F';
//   answer += indi.get('J') >= indi.get('M') ? 'J' : 'M';
//   answer += indi.get('A') >= indi.get('N') ? 'A' : 'N';

//   return answer;
// }