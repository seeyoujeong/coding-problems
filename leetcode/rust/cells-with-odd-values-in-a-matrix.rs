impl Solution1 {
    pub fn odd_cells(m: i32, n: i32, indices: Vec<Vec<i32>>) -> i32 {
        let m = m as usize;
        let n = n as usize;
        let mut row = vec![0; m];
        let mut col = vec![0; n];

        for i in 0..indices.len() {
            row[indices[i][0] as usize] += 1;
            col[indices[i][1] as usize] += 1;
        }

        let mut result = 0;

        for i in 0..m {
            for j in 0..n {
                if (row[i] + col[j]) % 2 != 0 {
                    result += 1;
                }
            }
        }

        result
    }
}

impl Solution2 {
    pub fn odd_cells(nr: i32, nc: i32, indices: Vec<Vec<i32>>) -> i32 {
        let mut rows = 0u64;
        let mut cols = 0u64;
        for pair in indices {
            rows ^= 1u64 << pair[0];
            cols ^= 1u64 << pair[1];
        }

        let r1 = rows.count_ones() as i32;
        let c1 = cols.count_ones() as i32;
        r1 * (nc - c1) + c1 * (nr - r1)
    }
}
