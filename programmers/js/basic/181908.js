// 접미사인지 확인하기
function solution(my_string, is_suffix) {
  return [...my_string]
    .map((_, idx) => my_string.slice(idx))
    .includes(is_suffix)
    ? 1
    : 0;
}
