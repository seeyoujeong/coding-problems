// 문자열 묶기
function solution(strArr) {
  const numOfStrLen = Array(31).fill(0);

  for (const str of strArr) {
    numOfStrLen[str.length]++;
  }

  return Math.max(...numOfStrLen);
}
