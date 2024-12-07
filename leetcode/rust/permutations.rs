impl Solution1 {
    pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = Vec::new();
        let mut temp = vec![0; nums.len()];
        let mut visited = vec![false; nums.len()];

        fn find_permutations(
            pos: usize,
            nums: &Vec<i32>,
            temp: &mut Vec<i32>,
            visited: &mut Vec<bool>,
            result: &mut Vec<Vec<i32>>,
        ) {
            if pos == nums.len() {
                result.push(temp.clone());
                return;
            }

            for i in 0..nums.len() {
                if !visited[i] {
                    visited[i] = true;
                    temp[pos] = nums[i];
                    find_permutations(pos + 1, nums, temp, visited, result);
                    visited[i] = false;
                }
            }
        };

        find_permutations(0, &nums, &mut temp, &mut visited, &mut result);

        result
    }
}

impl Solution2 {
    pub fn permute(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut res = Vec::new();
        let n = nums.len();

        Self::backtrack(&mut nums, 0, n, &mut res);

        res
    }

    fn backtrack(nums: &mut Vec<i32>, start: usize, n: usize, res: &mut Vec<Vec<i32>>) {
        if start == n {
            res.push(nums.clone());
            return;
        }

        for i in start..n {
            nums.swap(start, i);
            Self::backtrack(nums, start + 1, n, res);
            nums.swap(start, i);
        }
    }
}
