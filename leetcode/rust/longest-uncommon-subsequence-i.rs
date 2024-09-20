impl Solution {
    pub fn find_lu_slength(a: String, b: String) -> i32 {
        if a != b {
            return a.len().max(b.len()) as i32;
        }

        -1
    }
}
