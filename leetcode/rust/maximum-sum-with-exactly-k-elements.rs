impl Solution {
    pub fn maximize_sum(nums: Vec<i32>, k: i32) -> i32 {
        let mut result = 0;
        let max_num = nums.iter().max().unwrap();

        for i in 0..k {
            result += max_num + i;
        }

        result
    }
}

impl Solution2 {
    pub fn maximize_sum(nums: Vec<i32>, k: i32) -> i32 {
        if let Some(&max) = nums.iter().max() {
            return max * k + k * (k - 1) / 2;
        } else {
            return 0;
        }
    }
}
