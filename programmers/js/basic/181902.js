// 문자 개수 세기
function solution(my_string) {
  const result = Array(52).fill(0);

  for (const char of my_string) {
    const u16 = char.charCodeAt();

    if (u16 > 96) {
      result[u16 - 71] += 1;
    } else {
      result[u16 - 65] += 1;
    }
  }

  return result;
}
