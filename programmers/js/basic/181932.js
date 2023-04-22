// 코드 처리하기
function solution(code) {
  let ret = "";
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (mode === 0) {
      if (code[i] !== "1") {
        if (i % 2 === 0) ret += code[i];
      }

      if (code[i] === "1") {
        mode = 1;
        continue;
      }
    }

    if (mode === 1) {
      if (code[i] !== "1") {
        if (i % 2 !== 0) ret += code[i];
      }

      if (code[i] === "1") {
        mode = 0;
        continue;
      }
    }
  }

  return ret.length === 0 ? "EMPTY" : ret;
}

// 다른 풀이
function solution(code) {
  let odd = false;

  return (
    [...code].reduce((acc, cur, idx) => {
      if (cur === "1") {
        odd = !odd;
        return acc;
      }

      return idx % 2 === (odd ? 1 : 0) ? acc + cur : acc;
    }, "") || "EMPTY"
  );
}
