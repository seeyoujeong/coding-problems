impl Solution1 {
    pub fn dominant_index(nums: Vec<i32>) -> i32 {
        let mut max_idx = 0;

        for i in 1..nums.len() {
            max_idx = if nums[max_idx] < nums[i] { i } else { max_idx };
        }

        for i in 0..nums.len() {
            if max_idx != i && nums[max_idx] < nums[i] * 2 {
                return -1;
            }
        }

        max_idx as i32
    }
}

impl Solution2 {
    pub fn dominant_index(nums: Vec<i32>) -> i32 {
        let mut highest = (0, 0);
        let mut second_highest = 0;

        for (index, num) in nums.into_iter().enumerate() {
            if num > highest.1 {
                second_highest = highest.1;
                highest = (index, num);
            } else if num > second_highest {
                second_highest = num;
            }
        }

        if highest.1 >= second_highest * 2 {
            highest.0 as i32
        } else {
            -1
        }
    }
}
