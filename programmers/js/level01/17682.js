// [1차] 다트 게임 
function solution(dartResult) {
  const result = [];
  
  for (const dart of dartResult.match(/(\d+)([SDT])([*#]*)/g)) {
    let [num, area, option] = dart.split(/([SDT])/);

    if (area === 'S') area = 1;
    if (area === 'D') area = 2;
    if (area === 'T') area = 3;
    if (option === '') option = 1;
    if (option === '#') option = -1;
    if (option === '*') option = result.length ? 
      (result[result.length - 1] *= 2, 2) : 2;
    
    result.push(num ** area * option);
  }
  
  return result.reduce((acc, cur) => acc + cur, 0);
}