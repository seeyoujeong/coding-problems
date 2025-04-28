impl Solution {
    pub fn min_time_to_type(word: String) -> i32 {
        let mut result = word.len() as i32;
        let mut cur = 1;

        for b in word.bytes() {
            let next = b - 96;
            let time = next.abs_diff(cur) as i32;

            result += time.min(26 - time);
            cur = next;
        }

        result
    }
}
