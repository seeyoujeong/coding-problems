// 문자열 다루기 기본
function solution(s){
  return parseInt(s) === Number(s) ? 
    (s.length === 4 || s.length === 6) ? true : false :
    false;
}

// 다른 풀이
// function solution(s){
//   var regex = /^\d{6}$|^\d{4}$/;

//   return regex.test(s);
// }