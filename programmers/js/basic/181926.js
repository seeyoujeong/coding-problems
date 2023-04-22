// 수 조작하기 1
function solution(n, control) {
  return [...control].reduce((acc, cur) => {
    switch (cur) {
      case "w":
        acc += 1;
        break;
      case "s":
        acc -= 1;
        break;
      case "d":
        acc += 10;
        break;
      case "a":
        acc -= 10;
        break;
    }

    return acc;
  }, n);
}
