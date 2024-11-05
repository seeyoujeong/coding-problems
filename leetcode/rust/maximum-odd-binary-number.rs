impl Solution {
    pub fn maximum_odd_binary_number(s: String) -> String {
        let mut count_one = 0;
        let mut count_zero = 0;

        for b in s.chars() {
            if b == '1' {
                count_one += 1;
            } else {
                count_zero += 1;
            }
        }

        let str_one = "1".repeat(count_one - 1);
        let str_zero = "0".repeat(count_zero);

        format!("{str_one}{str_zero}1")
    }
}
