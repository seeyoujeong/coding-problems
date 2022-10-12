// 배열 회전시키기
function solution(numbers, direction) {
  var answer = [];

  if (direction === 'right') {
    answer = [numbers.at(-1), ...numbers.slice(0, -1)];
  } 

  if (direction === 'left') {
    answer = [...numbers.slice(1), numbers[0]];
  }

  return answer;
}