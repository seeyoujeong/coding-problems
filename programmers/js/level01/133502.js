// 햄버거 만들기
function solution(ingredient) {
  const burger = '1231';
  const stack = [];
  
  return ingredient.reduce((acc, cur) => {
    stack.push(cur);
    
    if (stack.length >= 4) {
      const tmp = stack.slice(-4).join('');
      
      if (tmp === burger) {
        stack.splice(-4);
        acc++;
      }
    }
    
    return acc;
  }, 0);
}
