impl Solution1 {
    pub fn is_palindrome(x: i32) -> bool {
        let mut chars: Vec<char> = x.to_string().chars().collect();

        chars.reverse();

        let reversed: String = chars.into_iter().collect();

        x.to_string() == reversed
    }
}

impl Solution2 {
    pub fn is_palindrome(x: i32) -> bool {
        if x < 0 {
            return false;
        }

        let mut num = x;
        let mut reversed = 0;

        loop {
            reversed = reversed * 10 + num % 10;
            num = num / 10;

            if num < 1 {
                break;
            }
        }

        x == reversed
    }
}

impl Solution3 {
    pub fn is_palindrome(x: i32) -> bool {
        if x < 0 {
            return false;
        }

        let str_x = x.to_string();

        str_x.chars().rev().eq(str_x.chars())
    }
}
