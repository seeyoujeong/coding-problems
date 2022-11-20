// 크냐?
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length; i++) {
  const nums = input[i].split(' ').map(v => +v);
  
  if (nums[0] === 0 && nums[1] === 0) {
    break;
  }
  
  if (nums[0] > nums[1]) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}