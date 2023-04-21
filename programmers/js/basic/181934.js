// 조건 문자열
function solution(ineq, eq, n, m) {
  if (ineq === "<") {
    return eq === "=" ? (n <= m ? 1 : 0) : n < m ? 1 : 0;
  }

  if (ineq === ">") {
    return eq === "=" ? (n >= m ? 1 : 0) : n > m ? 1 : 0;
  }
}

// 다른 풀이
// function solution(ineq, eq, n, m) {
//   if (eq === "=" && n === m) return 1;
//   if (ineq === "<" && n < m) return 1;
//   if (ineq === ">" && n > m) return 1;
//   return 0;
// }
