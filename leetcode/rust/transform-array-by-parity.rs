impl Solution {
    pub fn transform_array(mut nums: Vec<i32>) -> Vec<i32> {
        for i in 0..nums.len() {
            nums[i] = if nums[i] % 2 != 0 { 1 } else { 0 };
        }

        nums.sort();

        nums
    }
}
