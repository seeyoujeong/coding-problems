// 가위 바위 보
function solution(rsp) {
  var answer = '';

  rsp.split('').forEach(value => {
    if (value === '2') {
      answer += '0';
    } else if (value === '0') {
      answer += '5';
    } else {
      answer += '2';
    }
  });

  return answer;
}

// 다른 풀이
// function solution(rsp) {
//   let arr = {
//     2: 0,
//     0: 5,
//     5: 2
//   };

//   var answer = [...rsp].map(v => arr[v]).join("");

//   return answer;
// }