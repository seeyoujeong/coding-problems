// 3 x n 타일링
function solution(n) {
  var answer = 0;
  const memory = new Array(n);

  if (n == 2) return 3;

  if (n % 2 == 0) {
    memory[0] = 1;
    memory[2] = 3;

    for (let i = 4; i <= n; i += 2) {
      memory[i] = (4 * memory[i - 2] - memory[i - 4] + 1000000007) % 1000000007;
    }

    answer = memory[n];
  } else {
    answer = 0;
  }

  return answer;
}