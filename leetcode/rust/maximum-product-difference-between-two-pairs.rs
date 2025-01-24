impl Solution {
    pub fn max_product_difference(mut nums: Vec<i32>) -> i32 {
        nums.sort_unstable();

        let len = nums.len();

        (nums[len - 1] * nums[len - 2]) - (nums[0] * nums[1])
    }
}
