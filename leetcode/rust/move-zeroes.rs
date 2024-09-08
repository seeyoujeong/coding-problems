impl Solution1 {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let mut k = 0;

        for i in 0..nums.len() {
            if (nums[i] != 0) {
                nums[k] = nums[i];
                k += 1;
            }
        }

        for i in k..nums.len() {
            nums[i] = 0;
        }
    }
}

impl Solution2 {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let mut zeros: Vec<i32> = vec![];

        nums.retain(|&x| {
            if x == 0 {
                zeros.push(0);
                false
            } else {
                true
            }
        });

        nums.append(&mut zeros);
    }
}
