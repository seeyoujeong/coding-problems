// 정수를 나선형으로 배치하기
function solution(n) {
  const arr = Array.from({ length: n }, () => Array(n).fill(0));
  let i = 0;
  let j = 0;
  let num = 1;
  const progress = () => {
    arr[i][j] = num;
    num++;
  };

  progress();

  while (num <= n * n) {
    while (j + 1 < n && arr[i][j + 1] === 0) {
      j++;
      progress();
    }

    while (i + 1 < n && arr[i + 1][j] === 0) {
      i++;
      progress();
    }

    while (j - 1 >= 0 && arr[i][j - 1] === 0) {
      j--;
      progress();
    }

    while (i - 1 >= 0 && arr[i - 1][j] === 0) {
      i--;
      progress();
    }
  }

  return arr;
}
