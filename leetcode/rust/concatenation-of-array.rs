impl Solution1 {
    pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
        let mut result = nums.clone();

        result.extend(&nums);

        result
    }
}

impl Solution2 {
    pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
        [nums.clone(), nums.clone()].concat()
    }
}
