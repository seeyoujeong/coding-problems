impl Solution1 {
    pub fn is_monotonic(nums: Vec<i32>) -> bool {
        let mut is_increase = true;
        let mut is_decrease = true;

        for i in 1..nums.len() {
            if nums[i - 1] > nums[i] {
                is_increase = false;
            }

            if nums[i - 1] < nums[i] {
                is_decrease = false;
            }
        }

        is_increase || is_decrease
    }
}

impl Solution2 {
    pub fn is_monotonic(nums: Vec<i32>) -> bool {
        let mut iter1 = nums.iter().zip(nums.iter().skip(1));
        let mut iter2 = iter1.clone();

        iter1.all(|(x, y)| x <= y) || iter2.all(|(x, y)| x >= y)
    }
}
