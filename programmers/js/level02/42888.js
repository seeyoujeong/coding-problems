// 오픈채팅방
function solution(record) {
  record = record.map((str) => str.split(" "));

  const userMap = record.reduce((acc, [state, id, nik]) => {
    if (state === "Enter") {
      acc.set(id, nik);
    }

    if (state === "Change") {
      acc.set(id, nik);
    }

    return acc;
  }, new Map());

  return record.reduce((acc, [state, id, _]) => {
    if (state === "Enter") {
      acc.push(`${userMap.get(id)}님이 들어왔습니다.`);
    }

    if (state === "Leave") {
      acc.push(`${userMap.get(id)}님이 나갔습니다.`);
    }

    return acc;
  }, []);
}

// 다른 풀이
// function solution(record) {
//   const userInfo = {};
//   const action = [];
//   const stateMapping = {
//       'Enter': '님이 들어왔습니다.',
//       'Leave': '님이 나갔습니다.'
//   };

//   record.forEach((v) => {
//     const [state, id, nick] = v.split(' ');

//     if (state !== "Change") {
//       action.push([state, id]);
//     }

//     if (nick) {
//       userInfo[id] = nick;
//     }
//   });

//   return action.map(([state, uid]) => {
//     return `${userInfo[uid]}${stateMapping[state]}`;
//   });
// }
