impl Solution {
    pub fn find_array(pref: Vec<i32>) -> Vec<i32> {
        let mut result = Vec::new();
        result.push(pref[0]);

        for i in 1..pref.len() {
            result.push(pref[i - 1] ^ pref[i]);
        }

        result
    }
}
