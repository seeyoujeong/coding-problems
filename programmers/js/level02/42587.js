// 프린터
function solution(priorities, location) {
  var answer = 0;
  let arr = [];
  let result = [];

  for (let i = 0; i < priorities.length; i++) {
    let obj = {
      location: i,
      priority: priorities[i],
    };

    arr.push(obj);
  }

  while (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[0].priority < arr[i].priority) {
        arr.push(arr.shift());
        i = 0;
      } 
    }

    result.push(arr.shift());
  }

  answer = result.indexOf(result.find(elem => elem.location == location)) + 1;

  return answer;
}

// 다른 풀이
// function solution(priorities, location) {
//   var arr = priorities.map((priority, index) => {
//     return {
//       index: index, priority: priority
//     };
//   });

//   var queue = [];

//   while(arr.length > 0) {
//     var firstEle = arr.shift();
//     var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);

//     if (hasHighPriority) {
//       arr.push(firstEle);
//     } else {
//       queue.push(firstEle);
//     }
//   }

//   return queue.findIndex(queueEle => queueEle.index === location) + 1;
// }