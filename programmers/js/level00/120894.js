// 영어가 싫어요
function solution(numbers) {
  const numArr = ["zero", "one", "two", "three", "four", 
                  "five", "six", "seven", "eight", "nine"];
  return +numArr
    .reduce((acc, cur) => acc.split(cur).join(numArr.indexOf(cur)), numbers);
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