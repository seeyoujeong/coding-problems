impl Solution {
    pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
        use std::cmp::Ordering;

        let mut result = Vec::new();
        let mut nums = nums;

        nums.sort_unstable();

        for i in 0..(nums.len() - 2) {
            if nums[i] > 0 {
                break;
            }
            if 0 < i && nums[i - 1] == nums[i] {
                continue;
            }

            let mut j = i + 1;
            let mut k = nums.len() - 1;

            while j < k {
                match (nums[i] + nums[j] + nums[k]).cmp(&0) {
                    Ordering::Equal => {
                        result.push(vec![nums[i], nums[j], nums[k]]);

                        while j < k && nums[j] == nums[j + 1] {
                            j += 1;
                        }
                        while j < k && nums[k] == nums[k - 1] {
                            k -= 1;
                        }

                        j += 1;
                        k -= 1;
                    }
                    Ordering::Less => j += 1,
                    Ordering::Greater => k -= 1,
                }
            }
        }

        result
    }
}
