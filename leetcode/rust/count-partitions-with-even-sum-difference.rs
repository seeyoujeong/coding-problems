impl Solution {
    pub fn count_partitions(nums: Vec<i32>) -> i32 {
        let mut result = 0;
        let mut left_sum = 0;
        let mut right_sum: i32 = nums.iter().sum();

        for i in 0..(nums.len() - 1) {
            left_sum += nums[i];
            right_sum -= nums[i];

            let diff = left_sum - right_sum;

            if diff % 2 == 0 {
                result += 1;
            }
        }

        result
    }
}
