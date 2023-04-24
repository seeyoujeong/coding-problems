// 접두사인지 확인하기
function solution(my_string, is_prefix) {
  return [...my_string]
    .map((_, idx) => my_string.slice(0, idx))
    .includes(is_prefix)
    ? 1
    : 0;
}
