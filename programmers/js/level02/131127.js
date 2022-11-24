// 할인 행사
function solution(want, number, discount) {
  var answer = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    let count = 0;

    for (let j = 0; j < want.length; j++) {
      if (discount.slice(i, i + 10).filter(goods => goods === want[j]).length !== number[j]) {
        break;
      } else {
        count++;
      }
    }

    if (count === want.length) {
      answer++;
    }
  }

  return answer;
}