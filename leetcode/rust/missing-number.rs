impl Solution1 {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let one_to_n_sum = ((n * (n + 1)) / 2) as i32;
        let nums_sum: i32 = nums.iter().sum();

        one_to_n_sum - nums_sum
    }
}

impl Solution2 {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let mut result = 0;

        for i in 0..=nums.len() {
            result ^= i as i32;
        }

        for n in nums {
            result ^= n;
        }

        result
    }
}
