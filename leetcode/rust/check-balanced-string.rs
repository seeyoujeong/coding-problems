impl Solution {
    pub fn is_balanced(num: String) -> bool {
        let mut even_sum = 0;
        let mut odd_sum = 0;

        for (i, c) in num.chars().enumerate() {
            let cur_num = c.to_digit(10).unwrap();

            match i % 2 == 0 {
                true => even_sum += cur_num,
                false => odd_sum += cur_num,
            };
        }

        even_sum == odd_sum
    }
}
