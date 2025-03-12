impl Solution {
    pub fn has_same_digits(s: String) -> bool {
        let mut s_nums: Vec<u32> = s.chars().map(|c| c.to_digit(10).unwrap()).collect();

        while s_nums.len() > 2 {
            let mut temp = Vec::new();

            for nums in s_nums.windows(2) {
                let num = (nums[0] + nums[1]) % 10;

                temp.push(num);
            }

            s_nums = temp;
        }

        s_nums[0] == s_nums[1]
    }
}
