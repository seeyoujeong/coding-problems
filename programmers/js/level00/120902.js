// 문자열 계산하기
function solution(my_string) {
  let operator = 1;

  return my_string
    .split(' ')
    .reduce((acc, cur) => {
      if (!isNaN(cur)) {
        return acc + (+cur * operator);
      } else {
        operator = cur === '+' ? 1 : -1;
        return acc;
      }
    }, 0);
}