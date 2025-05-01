impl Solution {
    pub fn row_and_maximum_ones(mat: Vec<Vec<i32>>) -> Vec<i32> {
        let mut idx_of_row = 0;
        let mut max_count = 0;

        for (idx, row) in mat.iter().enumerate() {
            let count = row.iter().sum();

            if max_count < count {
                idx_of_row = idx;
                max_count = count;
            }
        }

        vec![idx_of_row as i32, max_count]
    }
}
