impl Solution {
    pub fn apply_operations(mut nums: Vec<i32>) -> Vec<i32> {
        for i in 0..nums.len() - 1 {
            if nums[i] == nums[i + 1] {
                nums[i] *= 2;
                nums[i + 1] = 0;
            }
        }

        let mut filtered: Vec<i32> = nums.clone().into_iter().filter(|&n| n != 0).collect();
        let diff = nums.len() - filtered.len();

        for i in 0..diff {
            filtered.push(0);
        }

        filtered
    }
}
