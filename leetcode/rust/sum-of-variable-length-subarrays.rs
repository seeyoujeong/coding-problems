impl Solution {
    pub fn subarray_sum(nums: Vec<i32>) -> i32 {
        let mut result = 0;

        for i in 0..nums.len() {
            let start = 0.max(i as i32 - nums[i]) as usize;
            result += nums[start..=i].iter().sum::<i32>();
        }

        result
    }
}
