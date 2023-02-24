// 숫자 문자열과 영단어
function solution(s) {
  return +['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    .reduce((acc, cur, idx) => acc.replace(new RegExp(cur, "g"), idx), s);
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