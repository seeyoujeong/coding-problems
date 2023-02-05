// 인덱스 바꾸기
function solution(my_string, num1, num2) {
  const my_array = [...my_string];
  
  my_array[num1] = my_string[num2];
  my_array[num2] = my_string[num1];
  
  return my_array.join('');
}

// 다른 풀이
// function solution(my_string, num1, num2) {
//   my_string = my_string.split('');
//   [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
//   return my_string.join('');
// }