// 외계행성의 나이
function solution(age) {
  var answer = '';
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  String(age).split('').forEach(num => {
    answer += arr[num];
  });

  return answer;
}