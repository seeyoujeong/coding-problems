// 큰 수 만들기
function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const num of number) {
    while (count < k && stack.at(-1) < num) {
      stack.pop();
      count += 1;
    }

    stack.push(num);
  }

  while (count < k) {
    count += 1;
    stack.pop();
  }

  return stack.join("");
}
