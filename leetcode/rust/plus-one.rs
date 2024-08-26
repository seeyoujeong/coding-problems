impl Solution {
    pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {
        let mut digits = digits.clone();
        digits.reverse();

        for i in (0..digits.len()) {
            if digits[i] < 9 {
                digits[i] += 1;

                digits.reverse();

                return digits;
            }

            digits[i] = 0;
        }

        digits.push(1);
        digits.reverse();
        digits
    }
}
