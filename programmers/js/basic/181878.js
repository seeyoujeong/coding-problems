// 원하는 문자열 찾기
function solution(myString, pat) {
  const regexp = new RegExp(`${pat}`, "i");

  return myString.match(regexp) ? 1 : 0;
}
