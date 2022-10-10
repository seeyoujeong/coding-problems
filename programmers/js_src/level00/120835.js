// 진료순서 정하기
function solution(emergency) {
  var answer = new Array(emergency.length);
  const tmp = [ ...emergency ];

  tmp.sort((a, b) => b - a).forEach((num, index) => {
    answer[emergency.indexOf(num)] = index + 1;
  });

  return answer;
}

// 다른 풀이
// function solution(emergency) {
//   let sorted = emergency.slice().sort((a, b) => b - a);

//   return emergency.map(v=> sorted.indexOf(v) + 1);
// }