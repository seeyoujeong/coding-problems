// 조건에 맞게 수열 변환하기 1
function solution(arr) {
  return arr.map((num) => {
    if (num >= 50 && num % 2 === 0) {
      return num / 2;
    }

    if (num < 50 && num % 2 === 1) {
      return num * 2;
    }

    return num;
  });
}
