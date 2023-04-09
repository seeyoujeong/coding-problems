// 기능개발
function solution(progresses, speeds) {
  const remainDays = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = remainDays[0];

  return remainDays.reduce(
    (acc, cur) => {
      if (maxDay >= cur) {
        acc[acc.length - 1] += 1;
      } else {
        acc.push(1);
        maxDay = cur;
      }

      return acc;
    },
    [0]
  );
}
