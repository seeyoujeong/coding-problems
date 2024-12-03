impl Solution {
    pub fn min_operations(nums: Vec<i32>) -> i32 {
        let mut result = 0;
        let mut nums = nums.clone();

        for i in 1..nums.len() {
            let diff = nums[i - 1] - nums[i] + 1;

            if diff > 0 {
                nums[i] += diff;
                result += diff;
            }
        }

        result
    }
}
