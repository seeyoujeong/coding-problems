impl Solution {
    pub fn sort_vowels(s: String) -> String {
        let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
        let mut vowels_of_s: Vec<char> = s.chars().filter(|c| vowels.contains(c)).collect();
        vowels_of_s.sort_unstable();

        let mut result = String::new();
        let mut idx = 0;

        for c in s.chars() {
            if vowels.contains(&c) {
                result.push(vowels_of_s[idx]);
                idx += 1;
            } else {
                result.push(c);
            }
        }

        result
    }
}
