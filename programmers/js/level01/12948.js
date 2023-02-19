// 핸드폰 번호 가리기
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 다른 풀이
// function solution(phone_number){
//   return phone_number.replace(/\d(?=\d{4})/g, "*");
// }