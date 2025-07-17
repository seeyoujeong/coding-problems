impl Solution1 {
    pub fn subset_xor_sum(nums: Vec<i32>) -> i32 {
        let mut result = 0;

        Self::add_xor(0, 0, &nums, &mut result);

        result
    }

    fn add_xor(idx: usize, res: i32, nums: &Vec<i32>, sum: &mut i32) {
        *sum += res;

        for i in idx..nums.len() {
            Self::add_xor(i + 1, res ^ nums[i], nums, sum);
        }
    }
}

impl Solution2 {
    pub fn subset_xor_sum(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let mut ans = 0;
        for i in 0..1 << n {
            let mut cur = 0;
            for j in 0..n {
                if (i & (1 << j)) != 0 {
                    cur ^= nums[j];
                }
            }
            ans += cur;
        }
        ans
    }
}
