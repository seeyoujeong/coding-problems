// 인덱스 바꾸기
function solution(my_string, num1, num2) {
  var answer = '';
  const array = my_string.split('');
  const tmp = array[num1];

  array[num1] = array[num2];
  array[num2] = tmp;
  answer = array.join('');

  return answer;
}

// 다른 풀이
// function solution(my_string, num1, num2) {
//   my_string = my_string.split('');
//   [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
//   return my_string.join('');
// }