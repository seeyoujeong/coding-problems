// [1차] 뉴스 클러스터링

function solution(str1, str2) {
  var answer = 0;
  let str1Multiset = getMultiset(str1);
  let str2Multiset = getMultiset(str2);
  let intersectionLength = getIntersection(str1Multiset, str2Multiset).length;
  let unionLength = getUnion(str1Multiset, str2Multiset).length;

  if (intersectionLength == 0 && unionLength == 0) {
    answer = 65536;
  } else {
    answer = Math.trunc(intersectionLength / unionLength * 65536);
  }

  return answer;
}

function getMultiset(str) {
  let arr = [];

  for (let i = 0; i < str.length - 1; i++) {
    arr.push(str.slice(i, i + 2).toLowerCase());
  }

  return arr.filter(elem => !(/[^a-z]/g).test(elem));
}

function getIntersection(arr1, arr2) {
  let arr = [];
  let set = new Set([...arr1, ...arr2]);

  for (let elem of set) {
    if (arr1.includes(elem) && arr2.includes(elem)) {
      for (let i = 0; i < Math.min(arr1.filter(arr => arr == elem).length, arr2.filter(arr => arr == elem).length); i++) {
        arr.push(elem);
      }
    }
  }

  return arr;
}

function getUnion(arr1, arr2) {
  let arr = [];
  let set = new Set([...arr1, ...arr2]);

  for (let elem of set) {
    for (let i = 0; i < Math.max(arr1.filter(arr => arr == elem).length, arr2.filter(arr => arr == elem).length); i++) {
      arr.push(elem);
    }
  }

  return arr;
}

// 참고 풀이
// function solution(str1, str2) {
//   var answer = 0;
//   let compare1 = verifiedSlices(str1), compare2 = verifiedSlices(str2);
//   const union = new Set([...compare1, ...compare2]);
//   let multiIntersectionLen = 0, multiUnionLen = 0;

//   for (const slice of union) {
//     const compare1Count = compare1.filter(x => x === slice).length,
//         compare2Count = compare2.filter(x => x === slice).length;
//     multiIntersectionLen += Math.min(compare1Count, compare2Count);
//     multiUnionLen += Math.max(compare1Count, compare2Count);
//   }

//   answer = multiUnionLen === 0 ? 65536 : Math.floor(multiIntersectionLen / multiUnionLen * 65536);
//   return answer;
// }

// function verifiedSlices(str) {
//   const onlyAlphabet = /[a-zA-Z]{2}/;
//   let result = [];
//   for (let i = 0; i < str.length - 1; i++) {
//       const slice = str.slice(i, i + 2);
//       if (onlyAlphabet.test(slice)) result.push(slice.toLowerCase());
//   }
//   return result;
// }

// 다른 풀이
// function solution (str1, str2) {

//   function explode(text) {
//     const result = [];
//     for (let i = 0; i < text.length - 1; i++) {
//       const node = text.substr(i, 2);
//       if (node.match(/[A-Za-z]{2}/)) {
//         result.push(node.toLowerCase());
//       }
//     }
//     return result;
//   }

//   const arr1 = explode(str1);
//   const arr2 = explode(str2);
//   const set = new Set([...arr1, ...arr2]);
//   let union = 0;
//   let intersection = 0;

//   set.forEach(item => {
//     const has1 = arr1.filter(x => x === item).length;
//     const has2 = arr2.filter(x => x === item).length;
//     union += Math.max(has1, has2);
//     intersection += Math.min(has1, has2);
//   });

//   return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
// }