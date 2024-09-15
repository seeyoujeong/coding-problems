impl Solution1 {
    pub fn is_subsequence(s: String, t: String) -> bool {
        let mut s_chars = s.chars();
        let mut t_chars = t.chars();

        let mut s_char = s_chars.next();

        for t_char in t_chars {
            if let Some(c) = s_char {
                if c == t_char {
                    s_char = s_chars.next();
                }
            } else {
                break;
            }
        }

        s_char.is_none()
    }
}

impl Solution2 {
    pub fn is_subsequence(s: String, t: String) -> bool {
        let s: Vec<char> = s.chars().collect();
        let t: Vec<char> = t.chars().collect();
        let mut i = 0;
        let mut j = 0;

        while i < s.len() && j < t.len() {
            if s[i] == t[j] {
                i += 1;
            }

            j += 1;
        }

        i == s.len()
    }
}
