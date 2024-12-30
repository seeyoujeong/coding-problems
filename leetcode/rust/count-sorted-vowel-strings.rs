impl Solution {
    pub fn count_vowel_strings(n: i32) -> i32 {
        let n = n as usize;
        let mut result = [1; 5];

        for i in 2..=n {
            for j in 1..5 {
                result[j] += result[j - 1];
            }
        }

        result.iter().sum()
    }
}
