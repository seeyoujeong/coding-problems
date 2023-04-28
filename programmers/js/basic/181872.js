// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
function solution(myString, pat) {
  return myString.slice(0, myString.lastIndexOf(pat)) + pat;
}
