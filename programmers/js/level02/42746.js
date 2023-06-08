// 가장 큰 수
function solution(numbers) {
  const maxLen = String(Math.max(...numbers)).length;

  let result = numbers
    .sort((a, b) => {
      const aa = String(a).repeat(maxLen).slice(0, maxLen);
      const bb = String(b).repeat(maxLen).slice(0, maxLen);

      if (bb === aa && aa[0] > aa[1]) return b - a;

      if (bb === aa && aa[0] < aa[1]) return a - b;

      return bb - aa;
    })
    .join("");

  return result[0] === "0" ? "0" : result;
}

// 다른 풀이
// function solution(numbers) {
//   const answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");

//   return answer[0] === "0" ? "0" : answer;
// }
