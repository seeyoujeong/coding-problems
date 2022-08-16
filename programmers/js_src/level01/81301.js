// 숫자 문자열과 영단어
function solution(s) {
  var answer = 0;
  const engNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let i = 0; i <= 9; i++) {
    s = s.replace(new RegExp(engNum[i], "g"), i);
  }

  answer = +s;

  return answer;
}

// 다른 풀이
// function solution(s) {
//   let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//   var answer = s;

//   for(let i=0; i< numbers.length; i++) {
//     let arr = answer.split(numbers[i]);
//     answer = arr.join(i);
//   }

//   return Number(answer);
// }