// 오픈채팅방
function solution(record) {
  var answer = [];
  const userIdMap = new Map();
  const userStateRecord = [];

  for (let user of record) {
    user = user.split(' ');
    let [state, id, nik] = user;

    if (userIdMap.has(id) && state != 'Leave') {
      userIdMap.delete(id);
      userIdMap.set(id, nik);
      userStateRecord.push({ id: id, state: state });
    } else if (state == 'Leave') {
      userStateRecord.push({ id: id, state: state });  
    } else {
      userIdMap.set(id, nik);
      userStateRecord.push({ id: id, state: state });
    }
  }

  for (let user of userStateRecord) {
    if (user.state == 'Enter') {
      answer.push(`${userIdMap.get(user.id)}님이 들어왔습니다.`);
    }

    if (user.state == 'Leave') {
      answer.push(`${userIdMap.get(user.id)}님이 나갔습니다.`);
    }
  }

  return answer;
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