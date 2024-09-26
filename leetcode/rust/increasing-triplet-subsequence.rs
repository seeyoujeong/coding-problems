impl Solution {
    pub fn increasing_triplet(nums: Vec<i32>) -> bool {
        let mut first_num = i32::MAX;
        let mut second_num = i32::MAX;

        for num in nums {
            if num <= first_num {
                first_num = num;
            } else if num <= second_num {
                second_num = num;
            } else {
                return true;
            }
        }

        false
    }
}
