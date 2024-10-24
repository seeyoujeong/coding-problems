impl Solution {
    pub fn smaller_numbers_than_current(nums: Vec<i32>) -> Vec<i32> {
        let mut result = Vec::new();

        for num in nums.iter() {
            let count = nums.iter().filter(|&n| n < num).count();
            result.push(count as i32);
        }

        result
    }
}
