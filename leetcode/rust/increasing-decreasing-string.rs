impl Solution {
    pub fn sort_string(s: String) -> String {
        let mut count = [0; 26];

        for b in s.bytes() {
            let idx = (b as usize) - 97;
            count[idx] += 1;
        }

        let mut result = String::new();

        while result.len() < s.len() {
            Self::append_chars(&mut result, &mut count, 0..26);
            Self::append_chars(&mut result, &mut count, (0..26).rev());
        }

        result
    }

    fn append_chars(
        result: &mut String,
        count: &mut [usize; 26],
        range: impl Iterator<Item = usize>,
    ) {
        for i in range {
            if count[i] > 0 {
                let c = char::from(i as u8 + 97);

                result.push(c);
                count[i] -= 1;
            }
        }
    }
}
