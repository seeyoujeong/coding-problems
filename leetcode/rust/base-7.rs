impl Solution1 {
    pub fn convert_to_base7(mut num: i32) -> String {
        if num == 0 {
            return "0".to_string();
        }

        let mut result = String::new();
        let is_negative = num < 0;

        if is_negative {
            num = -num;
        }

        while num > 0 {
            let remainder = num % 7;
            result.push_str(&remainder.to_string());
            num /= 7;
        }

        if is_negative {
            result.push('-');
        }

        result.chars().rev().collect()
    }
}

impl Solution2 {
    pub fn convert_to_base7(mut num: i32) -> String {
        let (mut result, mut base) = (0, 1);

        while num != 0 {
            result += base * (num % 7);
            base *= 10;
            num /= 7;
        }

        result.to_string()
    }
}
