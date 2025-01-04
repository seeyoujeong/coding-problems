impl Solution {
    pub fn total_money(n: i32) -> i32 {
        let mut result = 0;
        let mut monday = 0;

        for i in 0..n {
            if i % 7 == 0 {
                monday += 1;
            }

            result += monday + (i % 7);
        }

        result
    }
}
