impl Solution {
    pub fn find_matrix(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut count = vec![0; nums.len() + 1];
        let mut result = Vec::new();

        for num in nums {
            let cur_count = count[num as usize];

            if result.len() <= cur_count {
                result.push(Vec::new());
            }

            result[cur_count].push(num);
            count[num as usize] += 1;
        }

        return result;
    }
}
