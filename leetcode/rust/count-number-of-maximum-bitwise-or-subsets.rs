impl Solution1 {
    pub fn count_max_or_subsets(nums: Vec<i32>) -> i32 {
        let mut result = 0;
        let max_or = nums.iter().fold(0, |acc, cur| acc | cur);

        Self::dfs(0, 0, &nums, max_or, &mut result);

        result
    }

    fn dfs(idx: usize, sum: i32, nums: &Vec<i32>, max_or: i32, result: &mut i32) {
        if sum == max_or {
            *result += 1;
        }

        for i in idx..nums.len() {
            Self::dfs(i + 1, sum | nums[i], nums, max_or, result);
        }
    }
}

impl Solution2 {
    pub fn count_max_or_subsets(nums: Vec<i32>) -> i32 {
        let max = nums.iter().fold(0, |acc, cur| acc | cur);

        Self::solve(&nums, 0, max)
    }

    fn solve(nums: &[i32], or: i32, max: i32) -> i32 {
        match nums {
            [n, rest @ ..] if or | n == or => Self::solve(rest, or, max) * 2,
            [n, rest @ ..] => Self::solve(rest, or, max) + Self::solve(rest, or | n, max),
            [] => {
                if or == max {
                    1
                } else {
                    0
                }
            }
        }
    }
}
