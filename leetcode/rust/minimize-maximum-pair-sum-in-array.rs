impl Solution {
    pub fn min_pair_sum(mut nums: Vec<i32>) -> i32 {
        nums.sort();

        let mut result = 0;

        for i in 0..(nums.len() / 2) {
            result = result.max(nums[i] + nums[nums.len() - 1 - i]);
        }

        result
    }
}
