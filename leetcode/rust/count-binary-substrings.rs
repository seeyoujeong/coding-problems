impl Solution {
    pub fn count_binary_substrings(s: String) -> i32 {
        let mut res = 0;
        let mut prev = 0;
        let mut cur = 1;
        let chars: Vec<char> = s.chars().collect();

        for i in 1..s.len() {
            if (chars[i - 1] != chars[i]) {
                res += prev.min(cur);
                prev = cur;
                cur = 1;
            } else {
                cur += 1;
            }
        }

        res + prev.min(cur)
    }
}
