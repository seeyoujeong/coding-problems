impl Solution1 {
    pub fn replace_digits(s: String) -> String {
        let mut result = String::new();
        let chars: Vec<char> = s.chars().collect();

        for i in 0..chars.len() {
            if i % 2 != 0 {
                result.push(Self::shift(chars[i - 1], chars[i].to_digit(10).unwrap()))
            } else {
                result.push(chars[i]);
            }
        }

        result
    }

    pub fn shift(c: char, x: u32) -> char {
        char::from_u32((c as u32).checked_add(x).unwrap()).unwrap()
    }
}

impl Solution2 {
    pub fn replace_digits(s: String) -> String {
        let mut result = s.into_bytes();

        for i in (1..result.len()).step_by(2) {
            result[i] = result[i - 1] + (result[i] - b'0');
        }

        String::from_utf8(result).unwrap()
    }
}
