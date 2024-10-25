impl Solution {
    pub fn decode(encoded: Vec<i32>, first: i32) -> Vec<i32> {
        let mut arr = Vec::from([first]);

        for (idx, &num) in encoded.iter().enumerate() {
            arr.push(arr[idx] ^ num);
        }

        arr
    }
}
