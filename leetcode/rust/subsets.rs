impl Solution {
    pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = Vec::new();
        let mut cur = Vec::new();
        Self::generate_subsets(0, &mut cur, &nums, &mut result);

        result
    }

    fn generate_subsets(
        idx: usize,
        cur: &mut Vec<i32>,
        nums: &Vec<i32>,
        result: &mut Vec<Vec<i32>>,
    ) {
        if idx == nums.len() {
            result.push(cur.clone());
            return;
        }

        cur.push(nums[idx]);
        Self::generate_subsets(idx + 1, cur, nums, result);

        cur.pop();
        Self::generate_subsets(idx + 1, cur, nums, result);
    }
}
