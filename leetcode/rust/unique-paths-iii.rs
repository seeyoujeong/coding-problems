impl Solution {
    pub fn unique_paths_iii(mut grid: Vec<Vec<i32>>) -> i32 {
        let (m, n) = (grid.len(), grid[0].len());
        let (mut start_x, mut start_y) = (0, 0);
        let mut empty_squares = 1;

        for (i, row) in grid.iter().enumerate() {
            for (j, &cell) in row.iter().enumerate() {
                match cell {
                    1 => {
                        start_x = i;
                        start_y = j;
                    }
                    0 => empty_squares += 1,
                    _ => {}
                }
            }
        }

        fn count_paths(
            x: usize,
            y: usize,
            remaining_squares: i32,
            grid: &mut Vec<Vec<i32>>,
        ) -> i32 {
            if grid[x][y] == 2 {
                return (remaining_squares == 0) as i32;
            }

            let temp = grid[x][y];
            grid[x][y] = -1;
            let mut paths = 0;

            let directions = [(1, 0), (-1, 0), (0, 1), (0, -1)];
            for &(dx, dy) in &directions {
                let (next_x, next_y) = (x as i32 + dx, y as i32 + dy);

                if (0..grid.len() as i32).contains(&next_x)
                    && (0..grid[0].len() as i32).contains(&next_y)
                {
                    let (next_x, next_y) = (next_x as usize, next_y as usize);
                    if grid[next_x][next_y] != -1 {
                        paths += count_paths(next_x, next_y, remaining_squares - 1, grid);
                    }
                }
            }

            grid[x][y] = temp;
            paths
        }

        count_paths(start_x, start_y, empty_squares, &mut grid)
    }
}
