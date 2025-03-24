impl Solution {
    pub fn count_symmetric_integers(low: i32, high: i32) -> i32 {
        let mut result = 0;

        for i in low..=high {
            let nums: Vec<u32> = i
                .to_string()
                .chars()
                .map(|c| c.to_digit(10).unwrap())
                .collect();

            if nums.len() % 2 != 0 {
                continue;
            }

            let mut left = 0;
            let mut right = nums.len() - 1;

            let mut sum_left = 0;
            let mut sum_right = 0;

            while left < right {
                sum_left += nums[left];
                left += 1;
                sum_right += nums[right];
                right -= 1;
            }

            if sum_left == sum_right {
                result += 1;
            }
        }

        result
    }
}
