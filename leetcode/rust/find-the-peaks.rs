impl Solution1 {
    pub fn find_peaks(mountain: Vec<i32>) -> Vec<i32> {
        let mut result = Vec::new();

        for i in 1..(mountain.len() - 1) {
            let cur = mountain[i];

            if mountain[i - 1] < cur && mountain[i + 1] < cur {
                result.push(i as i32);
            }
        }

        result
    }
}

impl Solution2 {
    pub fn find_peaks(mountain: Vec<i32>) -> Vec<i32> {
        mountain
            .windows(3)
            .enumerate()
            .filter_map(|(i, window)| {
                (window[1] > window[0] && window[1] > window[2]).then_some((i as i32 + 1))
            })
            .collect()
    }
}
