// 배열에서 문자열 대소문자 변환하기
function solution(strArr) {
  return strArr.map((str, idx) =>
    idx % 2 ? str.toUpperCase() : str.toLowerCase()
  );
}
