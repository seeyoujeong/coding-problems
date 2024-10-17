impl Solution {
    pub fn difference_of_sums(n: i32, m: i32) -> i32 {
        let mut result = 0;

        for i in 1..=n {
            result += if i % m == 0 { -i } else { i };
        }

        result
    }
}
