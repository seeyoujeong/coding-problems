impl Solution {
    pub fn min_partitions(n: String) -> i32 {
        let val = n.chars().map(|x| x.to_digit(10).unwrap()).max();

        match val {
            Some(n) => n as i32,
            _ => 0,
        }
    }
}
