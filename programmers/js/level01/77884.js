// 약수의 개수와 덧셈
function solution(left, right) {
  return Array(right - left + 1)
    .fill(left)
    .map((num, idx) => num + idx)
    .reduce((acc, cur) => acc + (Number.isInteger(Math.sqrt(cur)) ? -cur : cur), 0);  
}
