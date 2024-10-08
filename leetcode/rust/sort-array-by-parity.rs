impl Solution {
    pub fn sort_array_by_parity(nums: Vec<i32>) -> Vec<i32> {
        let mut nums = nums.clone();
        let mut j = 0;

        for i in 1..nums.len() {
            if nums[j] % 2 == 1 && nums[i] % 2 == 0 {
                nums.swap(j, i);
                j += 1;
            } else if nums[j] % 2 == 0 {
                j += 1;
            }
        }

        nums
    }
}
