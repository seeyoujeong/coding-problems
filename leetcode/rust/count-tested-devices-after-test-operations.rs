impl Solution {
    pub fn count_tested_devices(battery_percentages: Vec<i32>) -> i32 {
        let mut result = 0;
        let mut dec = 0;

        for p in battery_percentages {
            if p - dec > 0 {
                result += 1;
                dec += 1;
            }
        }

        result
    }
}
