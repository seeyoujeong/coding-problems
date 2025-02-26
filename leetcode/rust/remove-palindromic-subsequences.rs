impl Solution1 {
    pub fn remove_palindrome_sub(s: String) -> i32 {
        let s: Vec<char> = s.chars().collect();
        let mut left = 0;
        let mut right = s.len() - 1;

        while left < right {
            if s[left] != s[right] {
                return 2;
            }

            left += 1;
            right -= 1;
        }

        1
    }
}

impl Solution2 {
    pub fn remove_palindrome_sub(s: String) -> i32 {
        if s.chars().eq(s.chars().rev()) {
            1
        } else {
            2
        }
    }
}
