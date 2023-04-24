// 부분 문자열 이어 붙여 문자열 만들기
function solution(my_strings, parts) {
  return parts.reduce(
    (acc, [s, e], idx) => acc + my_strings[idx].slice(s, e + 1),
    ""
  );
}
