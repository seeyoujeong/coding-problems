function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

// 다른 풀이
// function twoSum(nums: number[], target: number): number[] {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i += 1) {
//     if (map.has(target - nums[i])) {
//       return [map.get(target - nums[i]), i];
//     } else {
//       map.set(nums[i], i);
//     }
//   }

//   return [-1, -1];
// }
