impl Solution1 {
    pub fn is_toeplitz_matrix(matrix: Vec<Vec<i32>>) -> bool {
        for i in 1..matrix.len() {
            for j in 1..matrix[0].len() {
                if (matrix[i][j] != matrix[i - 1][j - 1]) {
                    return false;
                }
            }
        }

        true
    }
}

impl Solution2 {
    pub fn is_toeplitz_matrix(matrix: Vec<Vec<i32>>) -> bool {
        for i in 1..matrix.len() {
            if matrix[i - 1][..matrix[0].len() - 1] != matrix[i][1..] {
                return false;
            }
        }

        true
    }
}
