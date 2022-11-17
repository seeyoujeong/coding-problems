// 카펫
function solution(brown, yellow) {
  var answer = [];
  let yellowSizeArray = [];
  
  for (let i = 1; i <= Math.ceil(yellow / 2); i++) {
    if (yellow / i < i) break;
      
    if (yellow % i == 0) {
      yellowSizeArray.push([yellow / i, i]);
    } 
  }
  
  for (let yellowSize of yellowSizeArray) {
    let [width, height] = yellowSize;
      
    if (width * 2 + (height + 2) * 2 == brown) {
      answer = [width + 2, height + 2];
    }
  }
  
  return answer;
}

// 다른 풀이
// function solution(brown, yellow) {
//   var answer = [];
//   const size = brown + yellow;
//   answer = widthHeightPair(size).filter(pair => (pair[0] + pair[1]) * 2 - 4 === brown)[0];
//   return answer;
// }
// function widthHeightPair(size){
//   let result = [];
//   for(let i=1; i<=Math.sqrt(size); i++) if(size % i === 0) result.push([size/i, i]);
//   return result;
// }