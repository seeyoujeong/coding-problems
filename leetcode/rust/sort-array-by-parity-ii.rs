impl Solution1 {
    pub fn sort_array_by_parity_ii(nums: Vec<i32>) -> Vec<i32> {
        let mut nums = nums.clone();
        let mut even_idx = 0;
        let mut odd_idx = 1;

        while even_idx < nums.len() && odd_idx < nums.len() {
            if nums[even_idx] % 2 != 0 && nums[odd_idx] % 2 == 0 {
                nums.swap(even_idx, odd_idx);
            }

            if nums[even_idx] % 2 == 0 {
                even_idx += 2;
            }

            if nums[odd_idx] % 2 != 0 {
                odd_idx += 2;
            }
        }

        nums
    }
}

impl Solution2 {
    pub fn sort_array_by_parity_ii(mut nums: Vec<i32>) -> Vec<i32> {
        let mut left = 1;

        for i in (0..nums.len()).step_by(2) {
            if nums[i] & 1 == 1 {
                while nums[left] & 1 != 0 {
                    left += 2;
                }

                nums.swap(i, left);
            }
        }

        nums
    }
}
