// 프린터
function solution(priorities, location) {
  const result = [];
  const waitingList = priorities.map((priority, idx) => ({
    location: idx,
    priority,
  }));

  while (waitingList.length > 0) {
    const firstDoc = waitingList.shift();

    if (waitingList.some((doc) => firstDoc.priority < doc.priority)) {
      waitingList.push(firstDoc);
    } else {
      result.push(firstDoc);
    }
  }

  return result.findIndex((doc) => doc.location === location) + 1;
}
