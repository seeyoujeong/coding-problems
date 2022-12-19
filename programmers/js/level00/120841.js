// 점의 위치 구하기
function solution(dot) {
  const [x, y] = dot;
    
  if (x > 0 && y > 0) {
    return 1;
  } else if (0 > x && y > 0) {
    return 2;
  } else if (0 > x && 0 > y) {
    return 3;
  } else {
    return 4;
  }
}

// 다른 풀이
// function solution(dot) {
//   const [num,num2] = dot;
//   const check = num * num2 > 0;

//   return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
// }