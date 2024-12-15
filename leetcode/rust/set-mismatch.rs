impl Solution {
    pub fn find_error_nums(nums: Vec<i32>) -> Vec<i32> {
        use std::collections::HashSet;

        let mut result = Vec::new();
        let mut set = HashSet::new();

        for num in nums.iter() {
            if set.contains(num) {
                result.push(*num);
            }

            set.insert(*num);
        }

        for num in 1..=(nums.len() as i32) {
            if !set.contains(&num) {
                result.push(num);
                break;
            }
        }

        result
    }
}
