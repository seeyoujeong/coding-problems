impl Solution {
    pub fn lucky_numbers(matrix: Vec<Vec<i32>>) -> Vec<i32> {
        let row_mins: Vec<(usize, i32)> = matrix
            .iter()
            .map(|row| {
                let min_val = row.iter().min().unwrap();
                let min_idx = row.iter().position(|x| x == min_val).unwrap();
                (min_idx, *min_val)
            })
            .collect();

        let mut col_maxes = vec![i32::MIN; matrix[0].len()];

        for col in 0..matrix[0].len() {
            col_maxes[col] = matrix.iter().map(|row| row[col]).max().unwrap();
        }

        row_mins
            .iter()
            .filter_map(|&(idx, val)| {
                if val == col_maxes[idx] {
                    Some(val)
                } else {
                    None
                }
            })
            .collect()
    }
}
