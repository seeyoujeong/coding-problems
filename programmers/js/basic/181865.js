// 간단한 식 계산하기
function solution(binomial) {
  const [a, op, b] = binomial.split(" ");

  switch (op) {
    case "+":
      return Number(a) + Number(b);
    case "-":
      return Number(a) - Number(b);
    case "*":
      return Number(a) * Number(b);
  }
}
