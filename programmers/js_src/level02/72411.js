// 메뉴 리뉴얼
function solution(orders, course) {
  var answer = [];

  course.forEach(courseLength => {
      let result = {};

      orders.forEach(order => {
        let combinations = getCombinations(order.split(''), courseLength);

        for (let cases of combinations) {
          let count = 0;

          for (let order of orders) {
            let flag = true;

            for (let elem of cases) {
              if (!order.includes(elem)) {
                flag = false;
                break;
              }
            }

            if (flag) count++;
          }

          if (count > 1) {
            result[cases.sort().join('')] = count;
          }
        }
      });

      let maxCount = 0;

      for (let key in result) {
        if (maxCount < result[key]) maxCount = result[key];
      }

      for (let key in result) {
        if (maxCount == result[key]) answer.push(key);
      }
  });

  return answer.sort();
}

function getCombinations(arr, num) {
  const results = [];
  if (num === 1) {
    return arr.map(value => [value]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, num - 1);
    const attached = combinations.map(value => [fixed, ...value]);
    results.push(...attached);
  });

  return results;
}

// 효율↓
// function solution(orders, course) {
//   var answer = [];
//   let result = new Map();
//   let combinations = [];
//   let menus = [...new Set(orders.map(order => order.split('')).flat())];
  
//   course.forEach(value => combinations.push(getCombinations(menus, value)));
  
//   for (let cases of combinations) {
//     for (let array of cases) {
//       let count = 0;

//       for (let order of orders) {
//         let flag = true;

//         for (let elem of array) {
//           if (!order.includes(elem)) {
//             flag = false;
//             break;
//           }
//         }
          
//         if (flag) count++;
//       }
      
//       if (count > 1) {
//         result.set(array.sort(), count);
//       }
//     }
//   }
  
//   for (let len of course) {
//     let max = 0;
    
//     result.forEach((value, key) => {
//       if (key.length == len) {
//         if (max < value) max = value;
//       }
//     });
    
//     result.forEach((value, key) => {
//       if (key.length == len) {
//         if (max == value) answer.push(key.join(''));
//       }
//     });
//   }
  
//   return answer.sort();
// }

// function getCombinations(arr, num) {
//   const results = [];
//   if (num === 1) {
//     return arr.map(value => [value]);
//   }
  
//   arr.forEach((fixed, index, origin) => {
//     const rest = origin.slice(index + 1);
//     const combinations = getCombinations(rest, num - 1);
//     const attached = combinations.map(value => [fixed, ...value]);
//     results.push(...attached);
//   });
  
//   return results;
// }

// 다른 풀이
// function solution(orders, course) {
//   const ordered = {};
//   const candidates = {};
//   const maxNum = Array(10 + 1).fill(0);
//   const createSet = (arr, start, len, foods) => {
//     if (len === 0) {
//       ordered[foods] = (ordered[foods] || 0) + 1;
//       if (ordered[foods] > 1) candidates[foods] = ordered[foods];
//       maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
//       return;
//     }

//     for (let i = start; i < arr.length; i++) {
//       createSet(arr, i + 1, len - 1, foods + arr[i]);
//     }
//   };

//   orders.forEach((od) => {
//     const sorted = od.split('').sort();

//     course.forEach((len) => {
//       createSet(sorted, 0, len, '');
//     });
//   });

//   const launched = Object.keys(candidates).filter(
//     (food) => maxNum[food.length] === candidates[food]
//   );

//   return launched.sort();
// }