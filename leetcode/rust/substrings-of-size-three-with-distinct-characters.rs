impl Solution1 {
    pub fn count_good_substrings(s: String) -> i32 {
        if s.len() < 3 {
            return 0;
        }

        let s_chars: Vec<char> = s.chars().collect();
        let mut result = 0;

        for c in s_chars.windows(3) {
            if c[0] != c[1] && c[1] != c[2] && c[2] != c[0] {
                result += 1;
            }
        }

        result
    }
}

impl Solution2 {
    pub fn count_good_substrings(s: String) -> i32 {
        s.as_bytes().windows(3).fold(0, |acc, w| {
            let mut c = [0; 26];
            for n in w {
                c[(*n - b'a') as usize] += 1;
            }

            acc + 1 - c.iter().any(|x| *x > 1) as i32
        })
    }
}
