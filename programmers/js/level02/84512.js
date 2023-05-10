// 모음사전
function solution(word) {
  const vowels = ["", "A", "E", "I", "O", "U"];
  const set = new Set();

  function recursion(len, str) {
    if (len === 0) {
      set.add(str);
      return;
    }

    for (const char of vowels) {
      recursion(len - 1, `${str}${char}`);
    }
  }

  recursion(5, "");

  return [...set].sort().indexOf(word);
}

// 다른 풀이
// function solution(words) {
//   return [...words].reduce(
//     (acc, cur, idx) =>
//       acc +
//       [781, 156, 31, 6, 1][idx] * ["A", "E", "I", "O", "U"].indexOf(cur) +
//       1,
//     0
//   );
// }
