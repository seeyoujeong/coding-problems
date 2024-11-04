impl Solution {
    pub fn can_alice_win(nums: Vec<i32>) -> bool {
        let mut single_digits_sum = 0;
        let mut double_digits_sum = 0;

        for num in nums {
            match num < 10 {
                true => single_digits_sum += num,
                false => double_digits_sum += num,
            };
        }

        single_digits_sum != double_digits_sum
    }
}
