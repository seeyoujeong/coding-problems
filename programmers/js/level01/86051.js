// 없는 숫자 더하기
function solution(numbers) {
    var answer = 0;
    const zTo9 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    answer = zTo9
      .filter(num => !numbers.includes(num))
      .reduce((sum, cur) => sum + cur, 0);

    return answer;
}

// 다른 풀이
// function solution(numbers) {
//   return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }

// function solution(numbers) {
//   let answer = 0;

//   for(let i = 0; i <= 9; i++) {
//     if(!numbers.includes(i)) answer += i;
//   }

//   return answer;
// }