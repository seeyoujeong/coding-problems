impl Solution {
    pub fn minimum_sum(num: i32) -> i32 {
        let mut nums: Vec<char> = num.to_string().chars().collect();
        nums.sort();

        let num1: i32 = format!("{}{}", nums[0], nums[2]).parse().unwrap();
        let num2: i32 = format!("{}{}", nums[1], nums[3]).parse().unwrap();

        num1 + num2
    }
}
