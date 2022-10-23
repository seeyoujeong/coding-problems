// 숨어있는 숫자의 덧셈 (2)
function solution(my_string) {
  var answer = 0;
  const nums = my_string.match(/\d+/g);

  if (nums) {
    answer = nums.reduce((acc, cur) => +acc + +cur, 0);
  }

  return answer;
}

// 다른 풀이
// function solution(my_string) {
//   return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
// }