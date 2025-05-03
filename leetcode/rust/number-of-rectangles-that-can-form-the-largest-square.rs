impl Solution {
    pub fn count_good_rectangles(rectangles: Vec<Vec<i32>>) -> i32 {
        let max_len = rectangles
            .iter()
            .map(|rec| rec[0].min(rec[1]))
            .max()
            .unwrap();

        rectangles
            .iter()
            .filter(|rec| rec[0].min(rec[1]) == max_len)
            .count() as i32
    }
}
