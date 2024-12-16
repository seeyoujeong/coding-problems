impl Solution {
    pub fn add_strings(num1: String, num2: String) -> String {
        let num1: Vec<char> = num1.chars().collect();
        let num2: Vec<char> = num2.chars().collect();
        let mut i = num1.len() as i32 - 1;
        let mut j = num2.len() as i32 - 1;
        let mut sum = String::new();
        let mut carry = 0;

        while i >= 0 || j >= 0 || carry > 0 {
            let digit1 = if i < 0 {
                0
            } else {
                num1[i as usize].to_digit(10).unwrap()
            };
            let digit2 = if j < 0 {
                0
            } else {
                num2[j as usize].to_digit(10).unwrap()
            };
            let digits_sum = digit1 + digit2 + carry;

            sum = format!("{}{}", digits_sum % 10, sum);
            carry = digits_sum / 10;

            i -= 1;
            j -= 1;
        }

        sum
    }
}
