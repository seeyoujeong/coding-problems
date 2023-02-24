// 부족한 금액 계산하기
function solution(price, money, count) {
  return Math.max(Array(count)
    .fill(price)
    .map((num, idx) => num * (idx + 1))
    .reduce((acc, cur) => acc + cur, -money), 0);
}

// 다른 풀이
// function solution(price, money, count) {
//   const tmp = price * count * (count + 1) / 2 - money;
//   return tmp > 0 ? tmp : 0;
// }

// function solution(price, money, count) {
//   return Math.max(count * (price + price * count) / 2 - money, 0);
// }