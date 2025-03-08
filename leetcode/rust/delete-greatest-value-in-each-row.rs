impl Solution {
    pub fn delete_greatest_value(mut grid: Vec<Vec<i32>>) -> i32 {
        for row in grid.iter_mut() {
            row.sort_unstable();
        }

        let mut result = 0;
        let col = grid[0].len();
        let mut max = 0;

        for j in 0..col {
            for i in 0..grid.len() {
                max = max.max(grid[i][j]);
            }

            result += max;
        }

        result
    }
}
