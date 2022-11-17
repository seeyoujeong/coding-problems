// 가장 큰 수
function solution(numbers) {
  var answer = '';
  const maxLen = String(Math.max(...numbers)).length;

  numbers.sort((a, b) => {
    let aa = String(a).repeat(maxLen).slice(0, maxLen);
    let bb = String(b).repeat(maxLen).slice(0, maxLen);

    if (bb == aa && aa[0] > aa[1]) return b - a;

    if (bb == aa && aa[0] < aa[1]) return a - b;

    return bb - aa;
  });

  answer = numbers.join('');

  if (+answer === 0) answer = '0';

  return answer;
}

// 다른 풀이
// function solution(numbers) {
//   var answer = numbers.map(v => v + '')
//                       .sort((a, b) => (b + a) * 1 - (a + b) * 1)
//                       .join('');

//   // let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');

//   return answer[0] === '0' ? '0' : answer;
// }