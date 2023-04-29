// 배열 만들기 6
function solution(arr) {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0 || stk.at(-1) !== arr[i]) {
      stk.push(arr[i]);
      continue;
    }

    if (stk.at(-1) === arr[i]) {
      stk.pop();
    }
  }

  return stk.length > 0 ? stk : [-1];
}
