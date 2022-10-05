// 영어가 싫어요
function solution(numbers) {
  var answer = numbers;
  const numberArr = ["zero", "one", "two", "three", "four", 
                     "five", "six", "seven", "eight", "nine"];

  numberArr.forEach((num, index) => {
    answer = answer.split(num).join(index);
  });

  return +answer;
}

// 다른 풀이
// function solution(numbers) {
//   let numStr = ["zero", "one", "two", "three", "four", 
//                 "five", "six", "seven", "eight", "nine" ];

//   numStr.forEach((str, idx) => {
//     numbers = numbers.replaceAll(str, idx);
//   });

//   return Number(numbers);
// }