// 성격 유형 검사하기
function solution(survey, choices) {
  let answer = '';
  const types = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
  const typesScore = types.reduce((acc, cur) => ({...acc, [cur]: 0}), {});

  for (let i = 0; i < choices.length; i++) {
    const [type1, type2] = survey[i];  
      
    typesScore[choices[i] < 4 ? type1 : type2] += Math.abs(choices[i] - 4);
  }

  for (let i = 1; i < types.length; i += 2) {
    const [type1, type2] = [types[i - 1], types[i]];
      
    answer += typesScore[type1] >= typesScore[type2] ? type1 : type2;
  }

  return answer;
}

// 다른 풀이
// function solution(survey, choices) {
//   const MBTI = {};
//   const types = ["RT","CF","JM","AN"];

//   types.forEach((type) =>
//     type.split('').forEach((char) => MBTI[char] = 0)
//   );

//   choices.forEach((choice, index) => {
//     const [disagree, agree] = survey[index];

//     MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
//   });

//   return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
// }