impl Solution1 {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let mut left = 0;
        let mut right = nums.len() - 1;

        while left <= right {
            let mid = (left + right) / 2;

            if nums[mid] == target {
                return mid as i32;
            }

            if nums[mid] < target {
                left = mid + 1;
            } else {
                if mid == 0 {
                    return 0;
                }
                right = mid - 1;
            }
        }

        left as i32
    }
}

impl Solution2 {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        (match nums.binary_search(&target) {
            Ok(i) => i,
            Err(i) => i,
        }) as i32
    }
}
