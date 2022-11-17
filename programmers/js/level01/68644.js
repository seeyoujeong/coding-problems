// 두 개 뽑아서 더하기
function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  answer = Array.from(new Set(answer)).sort((a, b) => a - b);

  return answer;
}

// 다른 풀이
// function solution(numbers) {
//   const temp = []

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       temp.push(numbers[i] + numbers[j])
//     }
//   }

//   const answer = [...new Set(temp)]

//   return answer.sort((a, b) => a - b)
// }