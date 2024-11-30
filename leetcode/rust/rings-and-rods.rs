impl Solution {
    pub fn count_points(rings: String) -> i32 {
        let mut red = [0; 10];
        let mut green = [0; 10];
        let mut blue = [0; 10];

        let rings: Vec<char> = rings.chars().collect();

        for i in (0..rings.len()).step_by(2) {
            let color = rings[i];
            let placed = rings[i + 1].to_digit(10).unwrap();

            match color {
                'R' => red[placed as usize] += 1,
                'G' => green[placed as usize] += 1,
                'B' => blue[placed as usize] += 1,
                _ => (),
            };
        }

        let mut result = 0;

        for i in 0..10 {
            if red[i] > 0 && green[i] > 0 && blue[i] > 0 {
                result += 1;
            }
        }

        result
    }
}
