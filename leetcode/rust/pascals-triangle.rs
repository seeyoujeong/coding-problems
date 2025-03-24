impl Solution1 {
    pub fn generate(num_rows: i32) -> Vec<Vec<i32>> {
        let mut result: Vec<Vec<i32>> = Vec::new();

        for i in 0..(num_rows as usize) {
            let mut row = Vec::new();

            for j in 0..=i {
                if j == 0 || j == i {
                    row.push(1);
                } else {
                    let num = result[i - 1][j - 1] + result[i - 1][j];

                    row.push(num);
                }
            }

            result.push(row);
        }

        result
    }
}

impl Solution2 {
    fn generate(num_rows: i32) -> Vec<Vec<i32>> {
        let mut pascal_triangle: Vec<Vec<i32>> = Vec::new();
        pascal_triangle.push(vec![1]);

        if num_rows == 1 {
            return pascal_triangle;
        }

        pascal_triangle.push(vec![1, 1]);

        for i in 0..(num_rows - 2) {
            let last = pascal_triangle.last().unwrap();
            let mut current: Vec<i32> = vec![1];

            for j in 1..last.len() {
                current.push(last[j - 1] + last[j]);
            }

            current.push(1);
            pascal_triangle.push(current);
        }

        pascal_triangle
    }
}
