impl Solution1 {
    pub fn rearrange_array(nums: Vec<i32>) -> Vec<i32> {
        let mut result = vec![0; nums.len()];
        let mut p_i = 0;
        let mut n_i = 1;

        for i in 0..nums.len() {
            if nums[i] > 0 {
                result[p_i] = nums[i];
                p_i += 2;
            } else {
                result[n_i] = nums[i];
                n_i += 2;
            }
        }

        result
    }
}

impl Solution2 {
    pub fn rearrange_array(nums: Vec<i32>) -> Vec<i32> {
        let (mut negative, mut positive) = (Vec::new(), Vec::new());

        for num in nums {
            if num > 0 {
                positive.push(num);
            } else {
                negative.push(num);
            }
        }

        positive
            .iter()
            .zip(negative.iter())
            .flat_map(|(&p, &n)| [p, n])
            .collect::<Vec<i32>>()
    }
}
