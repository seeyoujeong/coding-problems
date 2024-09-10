/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.nums.slice(left, right + 1).reduce((acc, cur) => acc + cur, 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

var NumArray = function (nums) {
  this.nums = nums;
  this.prefixSum = this.nums.reduce((acc, cur, idx) => {
    acc[idx] = idx === 0 ? cur : acc[idx - 1] + cur;
    return acc;
  }, []);
};

NumArray.prototype.sumRange = function (left, right) {
  return left === 0
    ? this.prefixSum[right]
    : this.prefixSum[right] - this.prefixSum[left - 1];
};
