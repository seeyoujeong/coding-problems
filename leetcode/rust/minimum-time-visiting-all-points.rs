impl Solution {
    pub fn min_time_to_visit_all_points(points: Vec<Vec<i32>>) -> i32 {
        let mut result = 0;

        for i in 0..(points.len() - 1) {
            let x = points[i + 1][0].abs_diff(points[i][0]);
            let y = points[i + 1][1].abs_diff(points[i][1]);

            result += x.max(y);
        }

        result as i32
    }
}
