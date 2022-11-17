// 문자열 다루기 기본
function solution(s) {
  var answer = true;

  if (!(s.length == 4 || s.length == 6)) {
    answer = false;
  } else if (s.includes('e') || s.includes('x') || s.includes('o')) {
    answer = false;
  } else {
    answer = !isNaN(s);
  }

  return answer;
}

// 다른 풀이
// function solution(s){
//   var regex = /^\d{6}$|^\d{4}$/;

//   return regex.test(s);
// }