// 주차 요금 계산
function solution(fees, records) {
  var answer = [];
  const parkingState = {};
  const parkingTime = {};
  const parkingTotalTime = {};
  const calcTime = (time1, time2) => (new Date(`1970-01-01 ${time1}`) - new Date(`1970-01-01 ${time2}`)) / 60000;

  for (let record of records) {
    let [time, number, state] = record.split(' ');

    if (state == 'OUT') {
      parkingTotalTime[number] = !parkingTotalTime[number] ? 
        calcTime(time, parkingTime[number]) :
        parkingTotalTime[number] + calcTime(time, parkingTime[number]);
    }

    parkingTime[number] = time;
    parkingState[number] = state;
  }

  for (let number in parkingState) {
    if (parkingState[number] == 'IN') {
      parkingTotalTime[number] = !parkingTotalTime[number] ? 
        calcTime('23:59', parkingTime[number]) :
        parkingTotalTime[number] + calcTime('23:59', parkingTime[number]);
    }
  }

  let [primaryTime, primaryFee, perTime, perFee] = fees;

  for (let number of Object.keys(parkingTotalTime).sort((a, b) => a - b)) {
    if (parkingTotalTime[number] <= primaryTime) {
      answer.push(primaryFee);
    } else {
      answer.push(primaryFee + Math.ceil((parkingTotalTime[number] - primaryTime) / perTime) * perFee);
    }
  }

  return answer;
}

// 다른 풀이
// function solution(fees, records) {
//   const parkingTime = {};

//   records.forEach(r => {
//     let [time, id, type] = r.split(' ');
//     let [h, m] = time.split(':');
//     time = (h * 1) * 60 + (m * 1);
//     if (!parkingTime[id]) parkingTime[id] = 0;
//     if (type === 'IN') parkingTime[id] += (1439 - time);
//     if (type === 'OUT') parkingTime[id] -= (1439 - time);
//   });

//   const answer = [];

//   for (let [car, time] of Object.entries(parkingTime)) {
//     if (time <= fees[0]) time = fees[1];
//     else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1]
//     answer.push([car, time]);
//   }

//   return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
// }