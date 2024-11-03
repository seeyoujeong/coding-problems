impl Solution {
    pub fn pivot_integer(n: i32) -> i32 {
        let mut left = 0;
        let mut right = n * (n + 1) / 2;

        for i in 1..=n {
            left += i;

            if left == right {
                return i;
            }

            right -= i;
        }

        -1
    }
}
