// 뒤에 있는 큰 수 찾기
function solution(numbers) {
  const answer = Array(numbers.length);
  const stack = [];
  
  for (let i = 0; i < numbers.length; i++) {
    while (stack.length !== 0 && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  
  while (stack.length !== 0) {
    answer[stack.pop()] = -1;
  }
  
  return answer;
}