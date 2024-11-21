impl Solution1 {
    pub fn max_width_of_vertical_area(points: Vec<Vec<i32>>) -> i32 {
        let mut x_points: Vec<i32> = points.iter().map(|p| p[0]).collect();

        x_points.sort();

        let mut result = 0;

        for i in 0..(x_points.len() - 1) {
            let area = x_points[i + 1] - x_points[i];

            result = result.max(area);
        }

        result
    }
}

impl Solution2 {
    pub fn max_width_of_vertical_area(points: Vec<Vec<i32>>) -> i32 {
        use std::collections::BinaryHeap;

        let mut x_points: BinaryHeap<i32> = points.iter().map(|p| p[0]).collect();
        let mut result = 0;
        let mut cur_x = x_points.pop().unwrap();

        while let Some(next_x) = x_points.pop() {
            result = result.max(cur_x - next_x);

            cur_x = next_x;
        }

        result
    }
}
