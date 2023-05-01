// 조건에 맞게 수열 변환하기 3
function solution(arr, k) {
  return k % 2 ? arr.map((num) => num * k) : arr.map((num) => num + k);
}
