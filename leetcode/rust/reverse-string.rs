impl Solution1 {
    pub fn reverse_string(s: &mut Vec<char>) {
        s.reverse();
    }
}

impl Solution2 {
    pub fn reverse_string(s: &mut Vec<char>) {
        let mut left = 0;
        let mut right = s.len() - 1;

        while (left < right) {
            s.swap(left, right);
            left += 1;
            right -= 1;
        }
    }
}

impl Solution3 {
    pub fn reverse_string(s: &mut Vec<char>) {
        let mut left = 0;
        let mut right = s.len() - 1;

        while (left < right) {
            (s[left], s[right]) = (s[right], s[left]);
            left += 1;
            right -= 1;
        }
    }
}
