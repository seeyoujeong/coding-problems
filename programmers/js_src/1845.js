// 폰켓몬

function solution(nums) {
  var answer = 0;
  var numsSet = new Set(nums);
  
  if (numsSet.size < nums.length / 2) {
    answer = numsSet.size;
  } else {
    answer = nums.length / 2;
  }
  
  return answer;
}

// 다른 풀이
// function solution(nums) {
//   const max = nums.length / 2;
//   const arr = [...new Set(nums)];

//   return arr.length > max ? max : arr.length
// }