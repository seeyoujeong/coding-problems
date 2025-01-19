impl Solution {
    pub fn generate_key(num1: i32, num2: i32, num3: i32) -> i32 {
        let mut result = 0;
        let mut k = 1;

        for i in 0..4 {
            let digits = [(num1 / k) % 10, (num2 / k) % 10, (num3 / k) % 10];
            let min = digits.iter().min().unwrap();
            result += min * k;
            k *= 10;
        }

        result
    }
}
