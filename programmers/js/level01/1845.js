// 폰켓몬
function solution(nums) {
  const pickNums = nums.length / 2;
  const numsSetSize = (new Set(nums)).size;

  return numsSetSize < pickNums ? numsSetSize : pickNums;
}
