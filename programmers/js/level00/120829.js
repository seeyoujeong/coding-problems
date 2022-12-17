// 각도기
function solution(angle) {
  if (angle == 180) {
    return 4;
  } else if (angle > 90) {
    return 3;
  } else if (angle == 90) {
    return 2;
  } else if (90 > angle) {
    return 1;
  }
}

// 다른 풀이
// function solution(angle) {
//   return [0, 90, 91, 180].filter(x => angle >= x).length;
// }