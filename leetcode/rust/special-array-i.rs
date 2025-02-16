impl Solution1 {
    pub fn is_array_special(nums: Vec<i32>) -> bool {
        for i in 1..nums.len() {
            if (nums[i] + nums[i - 1]) % 2 == 0 {
                return false;
            }
        }

        true
    }
}

impl Solution2 {
    pub fn is_array_special(nums: Vec<i32>) -> bool {
        (0..nums.len() - 1).all(|i| nums[i] % 2 != nums[i + 1] % 2)
    }
}
