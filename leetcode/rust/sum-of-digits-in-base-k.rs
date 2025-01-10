impl Solution {
    pub fn sum_base(mut n: i32, k: i32) -> i32 {
        let mut result = 0;

        while n > 0 {
            result += n % k;
            n = n / k;
        }

        result
    }
}
