// 짝지어 제거하기
function solution(s) {
  const stack = [];
  
  [...s].forEach(char => {
    if (stack.at(-1) === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  });
  
  return stack.length ? 0 : 1;
}
