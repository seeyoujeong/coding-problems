impl Solution {
    pub fn find_length_of_lcis(nums: Vec<i32>) -> i32 {
        let mut result = 1;
        let mut count = 1;

        for i in 0..nums.len() - 1 {
            if nums[i] < nums[i + 1] {
                count += 1;
            } else {
                result = result.max(count);
                count = 1;
            }
        }

        result.max(count)
    }
}
