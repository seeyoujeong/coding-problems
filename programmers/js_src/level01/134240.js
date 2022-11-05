// 푸드 파이트 대회
function solution(food) {
  var answer = '';  
  food = food.slice(1).map(elem => {
    if (elem % 2 !== 0) {
      return (elem - 1) / 2;
    } else {
      return elem / 2;
    }
  });        

  food.forEach((elem, idx) => {
    answer += `${idx + 1}`.repeat(elem);
  });

  answer += '0';

  food.reverse().forEach((elem, idx) => {
    answer += `${food.length - idx}`.repeat(elem); 
  });

  return answer;
}

// 다른 풀이
// function solution(food) {
//   let res = '';

//   for (let i = 1; i < food.length; i++) {
//     res += String(i).repeat(Math.floor(food[i] / 2));
//   }

//   return res + '0' + [...res].reverse().join('');
// }