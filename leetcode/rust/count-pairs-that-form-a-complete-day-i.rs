impl Solution {
    pub fn count_complete_day_pairs(hours: Vec<i32>) -> i32 {
        let mut mod_count = [0; 24];
        let mut result = 0;

        for hour in hours {
            let mod_num = hour % 24;
            let complement_num = (24 - mod_num) % 24;

            result += mod_count[complement_num as usize];
            mod_count[mod_num as usize] += 1;
        }

        result
    }
}
