impl Solution {
    pub fn left_right_difference(nums: Vec<i32>) -> Vec<i32> {
        let mut left_sum: i32 = 0;
        let mut right_sum = nums.iter().sum();

        nums.iter()
            .map(|&num| {
                right_sum -= num;
                let res = left_sum.abs_diff(right_sum);
                left_sum += num;
                res as i32
            })
            .collect::<Vec<_>>()
    }
}
