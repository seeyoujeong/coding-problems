impl Solution1 {
    pub fn find_poisoned_duration(time_series: Vec<i32>, duration: i32) -> i32 {
        let mut result = duration;

        for i in 0..time_series.len() - 1 {
            let diff = time_series[i + 1] - time_series[i];

            result += if duration - 1 < diff { duration } else { diff }
        }

        result
    }
}

impl Solution2 {
    pub fn find_poisoned_duration(time_series: Vec<i32>, duration: i32) -> i32 {
        time_series
            .windows(2)
            .fold(duration, |acc, x| acc + i32::min(x[1] - x[0], duration))
    }
}
