impl Solution {
    pub fn add_digits(num: i32) -> i32 {
        let mut result = num;

        while result > 9 {
            let mut temp = 0;

            while result != 0 {
                temp += result % 10;
                result = result / 10;
            }

            result = temp;
        }

        result
    }
}
