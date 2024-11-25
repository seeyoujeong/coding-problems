impl Solution1 {
    pub fn di_string_match(s: String) -> Vec<i32> {
        let mut result = Vec::new();
        let mut perm = (0..=s.len());

        for c in s.chars() {
            if c == 'I' {
                result.push(perm.next().unwrap() as i32);
            } else if c == 'D' {
                result.push(perm.next_back().unwrap() as i32);
            }
        }

        result.push(perm.next().unwrap() as i32);

        result
    }
}

impl Solution2 {
    pub fn di_string_match(s: String) -> Vec<i32> {
        let mut low = 0;
        let mut high = s.len() as i32;
        let mut result = Vec::with_capacity(s.len() + 1);

        for c in s.chars() {
            if c == 'I' {
                result.push(low);
                low += 1;
            } else {
                result.push(high);
                high -= 1;
            }
        }

        result.push(low);
        result
    }
}
