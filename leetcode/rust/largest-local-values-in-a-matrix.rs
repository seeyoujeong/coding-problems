impl Solution {
    pub fn largest_local(grid: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let n = grid.len();
        let mut result = Vec::new();

        for i in 0..=n - 3 {
            let mut row = Vec::new();

            for j in 0..=n - 3 {
                let mut max = 0;

                for x in 0..3 {
                    for y in 0..3 {
                        max = max.max(grid[i + x][j + y]);
                    }
                }

                row.push(max);
            }

            result.push(row);
        }

        result
    }
}
