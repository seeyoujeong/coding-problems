impl Solution1 {
    pub fn sum_indices_with_k_set_bits(nums: Vec<i32>, k: i32) -> i32 {
        let mut result = 0;

        for i in 0..nums.len() {
            let mut count = 0;
            let mut idx = i;

            while idx > 0 {
                count += idx & 1;
                idx >>= 1;
            }

            if count == (k as usize) {
                result += nums[i];
            }
        }

        result
    }
}

impl Solution2 {
    pub fn sum_indices_with_k_set_bits(nums: Vec<i32>, k: i32) -> i32 {
        nums.iter().enumerate().fold(0, |acc, (idx, num)| {
            if idx.count_ones() == (k as u32) {
                acc + num
            } else {
                acc
            }
        })
    }
}
