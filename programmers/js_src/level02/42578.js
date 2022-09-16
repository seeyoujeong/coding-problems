// 위장
function solution(clothes) {
  var answer = 1; 
  const clothesTypeAmount = {};

  clothes.forEach(([name, type]) => {
    clothesTypeAmount[type] = 
        type in clothesTypeAmount ? clothesTypeAmount[type] + 1 : 1;
  });

  Object.values(clothesTypeAmount).forEach(amount => {
    answer *= 1 + amount;
  })


  return answer - 1;
}

// 효율↓
// function solution(clothes) {
//   var answer = 0; 

//   for (let i = 1; i <= clothes.length; i++) {
//     if (getCombinations(clothes, i).length === 0) break;
    
//     answer += getCombinations(clothes, i).length;
//   }
  
//   return answer;
// }

// function getCombinations(arr, num) {
//   const results = [];
  
//   if (num === 1) return arr.map(elem => [elem]);
  
//   arr.forEach((fixed, index, origin) => {
//     const rest = origin.slice(index + 1).filter(elem => fixed[1] !== elem[1]);
//     const combinations = getCombinations(rest, num - 1);
//     const attached = combinations.map(elem => [fixed, ...elem]);
//     results.push(...attached);
//   });
  
//   return results;
// }

// 다른 풀이
// function solution(clothes) {
//   return Object.values(clothes.reduce((obj, t)=> {
//     obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
//     return obj;
//   } , {})).reduce((a,b)=> a * (b + 1), 1) - 1;    
// }