// 숨어있는 숫자의 덧셈 (2)
function solution(my_string) {
  const nums = my_string.match(/\d+/g);
    
  return nums ? nums.reduce((acc, cur) => acc + +cur, 0) : 0;
}

// 다른 풀이
// function solution(my_string) {
//   return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
// }