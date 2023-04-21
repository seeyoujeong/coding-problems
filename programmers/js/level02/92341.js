// 주차 요금 계산
function solution(fees, records) {
  const MAX_TIME = 1439;
  const parkingRecords = new Map();

  records.forEach((record) => {
    const [time, carNumber, state] = record.split(" ");
    const [h, m] = time.split(":");
    const minute = parseInt(h) * 60 + parseInt(m);

    if (!parkingRecords.has(carNumber)) {
      parkingRecords.set(carNumber, 0);
    }

    const accumulatedTime = parkingRecords.get(carNumber);

    if (state === "IN") {
      parkingRecords.set(carNumber, accumulatedTime + (MAX_TIME - minute));
    }

    if (state === "OUT") {
      parkingRecords.set(carNumber, accumulatedTime - (MAX_TIME - minute));
    }
  });

  const [defaultTime, defaultFee, perTime, perFee] = fees;

  return [...parkingRecords]
    .sort((a, b) => a[0] - b[0])
    .map(([_, time]) => {
      if (defaultTime >= time) return defaultFee;

      return defaultFee + Math.ceil((time - defaultTime) / perTime) * perFee;
    });
}
