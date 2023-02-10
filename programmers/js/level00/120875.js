// 평행
function solution(dots) {
  const EXIST = 1;
  const NOT_EXIST = 0;
  const gradients = new Set();
  
  for (let i = 0; i < dots.length - 1; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const gradient = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
      
      if (gradients.has(gradient)) {
        return EXIST;
      } else {
        gradients.add(gradient);
      }
    }
  }
  
  return NOT_EXIST;
}