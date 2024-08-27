impl Solution {
    pub fn my_sqrt(x: i32) -> i32 {
        use std::cmp::Ordering;

        if x <= 1 {
            return x;
        }

        let x = x as u64;
        let mut left = 0;
        let mut right = x / 2;

        while left <= right {
            let mid = (left + right) / 2;
            let pow = mid * mid;

            match pow.cmp(&x) {
                Ordering::Less => {
                    left = mid + 1;
                }
                Ordering::Greater => {
                    right = mid - 1;
                }
                Ordering::Equal => {
                    right = mid;
                    break;
                }
            }
        }

        right as i32
    }
}
