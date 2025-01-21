impl Solution {
    pub fn smallest_number(n: i32) -> i32 {
        let mut result = 2;

        while result <= n {
            result *= 2;
        }

        result - 1
    }
}
