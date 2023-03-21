// 위장
function solution(clothes) {
  const clothesTypeAmount = clothes.reduce((acc, [_, type]) => {
    acc[type] = acc[type] + 1 || 1;
    return acc;
  }, {});

  return Object.values(clothesTypeAmount).reduce((acc, cur) => {
    acc *= cur + 1;
    return acc;
  }, 1) - 1;
}

// 다른 풀이
// function solution(clothes) {
//   let answer = 1;
//   const key = new Map();
  
//   for (const [_, type] of clothes) {
//     if (key.has(type)) {
//       key.set(type, key.get(type) + 1);
//     } else {
//       key.set(type, 1);
//     }
//   }
  
//   for (const val of key.values()){
//     answer *= val + 1
//   }

//   return answer - 1;
// }