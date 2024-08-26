impl Solution1 {
    pub fn add_binary(a: String, b: String) -> String {
        let a = a.chars().rev().collect::<Vec<_>>();
        let b = b.chars().rev().collect::<Vec<_>>();

        let mut result = String::new();

        let mut a_idx = 0;
        let mut b_idx = 0;
        let mut carry = 0;

        while a_idx < a.len() || b_idx < b.len() || carry != 0 {
            let a_val = a.get(a_idx).unwrap_or(&'0');
            let b_val = b.get(b_idx).unwrap_or(&'0');

            let mut sum = a_val.to_digit(10).unwrap() + b_val.to_digit(10).unwrap() + carry;

            if sum > 1 {
                sum = sum % 2;
                carry = 1;
            } else {
                carry = 0;
            }

            result = format!("{sum}{result}");

            a_idx += 1;
            b_idx += 1;
        }

        result
    }
}

impl Solution2 {
    pub fn add_binary(a: String, b: String) -> String {
        let a_num = u128::from_str_radix(&a, 2).unwrap();
        let b_num = u128::from_str_radix(&b, 2).unwrap();

        let sum = a_num + b_num;

        format!("{:b}", sum)
    }
}
