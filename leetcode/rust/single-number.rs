impl Solution1 {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut result = 0;

        for num in nums.iter() {
            result = result ^ num;
        }

        result
    }
}

impl Solution2 {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        nums.into_iter().fold(0, |acc, cur| acc ^ cur)
    }
}
