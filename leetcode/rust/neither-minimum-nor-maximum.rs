impl Solution {
    pub fn find_non_min_or_max(nums: Vec<i32>) -> i32 {
        let mut max = 0;
        let mut min = 101;

        for &num in nums.iter() {
            if max < num {
                max = num;
            }

            if min > num {
                min = num;
            }
        }

        for num in nums {
            if max != num && min != num {
                return num;
            }
        }

        -1
    }
}
