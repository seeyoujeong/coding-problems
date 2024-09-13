impl Solution {
    pub fn is_perfect_square(num: i32) -> bool {
        let num = num as i64;
        let mut left = 0;
        let mut right = num as i64;

        while left <= right {
            let mid = left + (right - left) / 2;

            if mid * mid == num {
                return true;
            }

            if mid * mid < num {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        false
    }
}
