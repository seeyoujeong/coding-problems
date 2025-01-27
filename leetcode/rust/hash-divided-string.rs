impl Solution {
    pub fn string_hash(s: String, k: i32) -> String {
        let k = k as usize;
        let mut result = String::new();

        for i in 0..(s.len() / k) {
            let sum = s[(i * k)..(i * k + k)]
                .bytes()
                .map(|b| b as u32 - 97)
                .sum::<u32>();
            let mod_num = (sum % 26) as u8;

            result.push((mod_num + 97) as char);
        }

        result
    }
}
