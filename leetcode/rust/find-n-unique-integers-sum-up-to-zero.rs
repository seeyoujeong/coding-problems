impl Solution {
    pub fn sum_zero(n: i32) -> Vec<i32> {
        let mut result = if n % 2 == 0 { vec![] } else { vec![0] };

        for i in 1..=(n / 2) {
            result.push(i);
            result.push(-i);
        }

        result
    }
}
