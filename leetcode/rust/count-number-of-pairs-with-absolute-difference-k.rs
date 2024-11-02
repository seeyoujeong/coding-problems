impl Solution {
    pub fn count_k_difference(nums: Vec<i32>, k: i32) -> i32 {
        let mut result = 0;

        for i in 0..nums.len() {
            for j in (i + 1)..nums.len() {
                if (nums[i].abs_diff(nums[j]) == k as u32) {
                    result += 1;
                }
            }
        }

        result
    }
}
