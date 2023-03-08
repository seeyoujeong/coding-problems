// 구명보트
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  
  while (people.length) {
    if (people[0] + people.at(-1) <= limit) {
      people.shift();
    }
    
    people.pop();
    answer++;
  }
  
  return answer;
}

// 다른 풀이
// function solution(people, limit) {
//   var answer = 0;
  
//   people.sort((a, b) => a - b);
  
//   for (let i = people.length - 1; answer < i; i--) {
//     if (people[answer] + people[i] <= limit) answer++;
//   }    
  
//   return people.length - answer;
// }