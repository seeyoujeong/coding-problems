// 부족한 금액 계산하기
function solution(price, money, count) {
  var answer = -1;
  var priceSum = 0;

  for (let i = 1; i <= count; i++) {
    priceSum += price * i;
  }

  if (money < priceSum) {
    answer = priceSum - money;
  } else {
    answer = 0;
  }

  return answer;
}

// 다른 풀이
// function solution(price, money, count) {
//   const tmp = price * count * (count + 1) / 2 - money;
//   return tmp > 0 ? tmp : 0;
// }