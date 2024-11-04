impl Solution {
    pub fn diagonal_sum(mat: Vec<Vec<i32>>) -> i32 {
        let mut result = 0;

        for i in 0..mat.len() {
            result += mat[i][i];

            if i != mat.len() - 1 - i {
                result += mat[mat.len() - 1 - i][i];
            }
        }

        result
    }
}
