// 햄버거 만들기
function solution(ingredient) {
  var answer = 0;
  const burger = [1, 2, 3, 1];
  const stack = [];

  ingredient.forEach(elem => {
    stack.push(elem);

    if (stack.length >= 4) {
      const tmp = stack.slice(-4);

      for (let i = 0; i < burger.length; i++) {
        if (tmp[i] !== burger[i]) {
          break;
        }

        if (i === 3 && tmp[i] === burger[i]) {
          stack.pop();
          stack.pop();
          stack.pop();
          stack.pop();
          answer++;
        }
      }
    }
  });

  return answer;
}