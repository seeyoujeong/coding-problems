impl Solution {
    pub fn min_bit_flips(start: i32, goal: i32) -> i32 {
        format!("{:b}", start ^ goal)
            .chars()
            .filter(|&c| c == '1')
            .count() as i32
    }
}
