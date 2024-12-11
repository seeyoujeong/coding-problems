impl Solution {
    pub fn decrypt(code: Vec<i32>, k: i32) -> Vec<i32> {
        let mut result = vec![0; code.len()];

        if k == 0 {
            return result;
        }

        for i in 0..code.len() {
            if k > 0 {
                for j in 1..=(k as usize) {
                    result[i] += code[(i + j) % code.len()];
                }
            } else {
                for j in 1..=(k.abs() as usize) {
                    result[i] += code[(i - j + code.len()) % code.len()];
                }
            }
        }

        result
    }
}
