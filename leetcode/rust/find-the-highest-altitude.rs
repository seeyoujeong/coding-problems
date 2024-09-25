impl Solution {
    pub fn largest_altitude(gain: Vec<i32>) -> i32 {
        let mut result = 0;
        let mut cur = 0;

        for a in gain {
            cur += a;
            result = result.max(cur);
        }

        result
    }
}
