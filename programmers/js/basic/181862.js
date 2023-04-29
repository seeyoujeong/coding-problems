// 세 개의 구분자
function solution(myStr) {
  const splitA = myStr.split("a");
  let splitB = [];
  let splitC = [];

  for (const str of splitA) {
    splitB.push(str.split("b"));
  }

  splitB = splitB.flat();

  for (const str of splitB.flat()) {
    splitC.push(str.split("c"));
  }

  splitC = splitC.flat().filter((str) => str);

  return splitC.length === 0 ? ["EMPTY"] : splitC;
}

// 다른 풀이
// function solution(myStr) {
//   return myStr.match(/[^abc]+/g) || ["EMPTY"];
// }

// function solution(myStr) {
//   const result = myStr.split(/[abc]/).filter((str) => str);
//   return result.length === 0 ? ["EMPTY"] : result;
// }
