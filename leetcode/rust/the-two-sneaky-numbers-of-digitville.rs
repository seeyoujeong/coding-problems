impl Solution {
    pub fn get_sneaky_numbers(nums: Vec<i32>) -> Vec<i32> {
        use std::collections::HashSet;

        let mut result = Vec::new();
        let mut set = HashSet::new();

        for num in nums {
            match set.contains(&num) {
                true => {
                    result.push(num);
                }
                false => {
                    set.insert(num);
                }
            };
        }

        result
    }
}
