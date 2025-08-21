impl Solution {
    pub fn min_operations(nums: Vec<i32>, k: i32) -> i32 {
        nums.iter().fold(k, |acc, cur| acc ^ cur).count_ones() as i32
    }
}
