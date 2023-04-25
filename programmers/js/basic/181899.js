// 카운트 다운
function solution(start, end) {
  return Array.from({ length: start - end + 1 }, (_, idx) => start - idx);
}
