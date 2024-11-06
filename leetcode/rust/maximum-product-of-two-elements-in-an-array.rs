impl Solution1 {
    pub fn max_product(nums: Vec<i32>) -> i32 {
        let mut nums = nums;

        nums.sort_by(|a, b| b.cmp(a));

        (nums[0] - 1) * (nums[1] - 1)
    }
}

impl Solution2 {
    pub fn max_product(nums: Vec<i32>) -> i32 {
        let mut nums = nums;

        nums.sort_unstable_by(|a, b| b.cmp(a));

        (nums[0] - 1) * (nums[1] - 1)
    }
}
