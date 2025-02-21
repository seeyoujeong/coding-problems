impl Solution {
    pub fn find_missing_and_repeated_values(grid: Vec<Vec<i32>>) -> Vec<i32> {
        let n = grid.len() * grid.len();
        let mut count = vec![0; n + 1];

        for i in 0..grid.len() {
            for j in 0..grid.len() {
                let num = grid[i][j] as usize;
                count[num] += 1;
            }
        }

        let repeat = count.iter().position(|&n| n == 2).unwrap() as i32;
        let missing = count.iter().rposition(|&n| n == 0).unwrap() as i32;

        vec![repeat, missing]
    }
}
