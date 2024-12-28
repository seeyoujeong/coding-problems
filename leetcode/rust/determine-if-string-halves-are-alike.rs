impl Solution {
    pub fn halves_are_alike(s: String) -> bool {
        let vowels = "aeiouAEIOU";

        let half = s.len() / 2;
        let a = &s[0..half];
        let b = &s[half..];

        let mut count_a = 0;
        let mut count_b = 0;

        for (ca, cb) in a.chars().zip(b.chars()) {
            if vowels.contains(ca) {
                count_a += 1;
            }

            if vowels.contains(cb) {
                count_b += 1;
            }
        }

        count_a == count_b
    }
}
