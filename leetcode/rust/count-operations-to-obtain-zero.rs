impl Solution {
    pub fn count_operations(mut num1: i32, mut num2: i32) -> i32 {
        let mut result = 0;

        while num1 != 0 && num2 != 0 {
            if num1 >= num2 {
                let k = num1 / num2;
                num1 -= num2 * k;
                result += k;
            } else {
                let k = num2 / num1;
                num2 -= num1 * k;
                result += k;
            }
        }

        result
    }
}
