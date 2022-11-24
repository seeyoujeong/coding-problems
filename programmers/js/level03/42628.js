// 이중우선순위큐
function solution(operations) {
  var answer = [];
  const queue = [];
  
  operations.forEach(oper => {
    const [cmd, num] = oper.split(' ');
    
    if (cmd === 'I') {
      queue.push(+num);
    }
    
    if (cmd === 'D' && queue.length > 0) {
      if (num == 1) {
        queue.sort((a, b) => a - b);
        queue.pop();
      }
      
      if (num == -1) {
        queue.sort((a, b) => b - a);
        queue.pop();
      }
    }
  });
  
  if (queue.length === 0) {
    answer = [0, 0];
  } else {
    queue.sort((a, b) => b - a);
    answer.push(queue[0]);
    answer.push(queue.at(-1));
  }
  
  return answer;
}