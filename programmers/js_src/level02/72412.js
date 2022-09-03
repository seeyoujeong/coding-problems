// 순위 검색

// 효율↓
// function solution(info, query) {
//   var answer = [];
//   const infoList = [];
  
//   for (let i of info) {
//     let [lang, pos, career, food, score] = i.split(' ');
    
//     infoList.push({lang, pos, career, food, score});
//   }
  
//   for (let q of query) {
//     let [lang, pos, career, food, score] = q.split(' ').filter(value => value != 'and');
    
//     answer.push(infoList.filter(info => (info.lang == lang || lang == '-') && 
//                                 (info.pos == pos || pos == '-') &&
//                                 (info.career == career || career == '-') &&
//                                 (info.food == food || food == '-') &&
//                                 (info.score >= +score)).length);
//   }
  
//   return answer;
// }