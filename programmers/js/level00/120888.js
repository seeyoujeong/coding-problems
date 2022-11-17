// 중복된 문자 제거
function solution(my_string) {
  var answer = '';
  const set = new Set();

  for (let str of my_string) {
    set.add(str);
  }

  answer = [...set].join('');

  return answer;
}

// 다른 풀이
// function solution(my_string) {
//   return [...new Set(my_string)].join('');
// }