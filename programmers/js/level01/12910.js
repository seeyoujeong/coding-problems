// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  const filterArr = arr.filter(num => !(num % divisor));
  
  return filterArr.length > 0 ? filterArr.sort((a, b) => a - b) : [-1];
}
