impl Solution1 {
    pub fn minimum_operations(nums: Vec<i32>) -> i32 {
        let mut result = 0;

        for num in nums {
            if num % 3 != 0 {
                result += 1;
            }
        }

        result
    }
}

impl Solution2 {
    pub fn minimum_operations(nums: Vec<i32>) -> i32 {
        nums.iter()
            .fold(0, |acc, cur| if cur % 3 != 0 { acc + 1 } else { acc })
    }
}
