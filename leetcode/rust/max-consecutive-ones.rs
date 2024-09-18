impl Solution1 {
    pub fn find_max_consecutive_ones(nums: Vec<i32>) -> i32 {
        let mut result = 0;
        let mut count = 0;

        for num in nums {
            if num == 0 {
                if result < count {
                    result = count;
                }

                count = 0;
            }

            count += num;
        }

        if result < count {
            result = count;
        }

        result
    }
}

impl Solution2 {
    pub fn find_max_consecutive_ones(nums: Vec<i32>) -> i32 {
        let mut cnt = 0;
        let mut max = 0;

        for n in nums {
            if n == 1 {
                cnt += 1;
                max = max.max(cnt);
            } else {
                cnt = 0;
            }
        }

        max
    }
}
