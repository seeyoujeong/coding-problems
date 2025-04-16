impl Solution {
    pub fn find_closest(x: i32, y: i32, z: i32) -> i32 {
        use std::cmp::Ordering;

        let distance_from_1 = x.abs_diff(z);
        let distance_from_2 = y.abs_diff(z);

        match distance_from_1.cmp(&distance_from_2) {
            Ordering::Less => 1,
            Ordering::Equal => 0,
            Ordering::Greater => 2,
        }
    }
}
