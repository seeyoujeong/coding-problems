impl Solution {
    pub fn to_hex(num: i32) -> String {
        if num == 0 {
            return String::from("0");
        }

        let mut num = num as i64;

        if num < 0 {
            num += 2_i64.pow(32);
        }

        let hex = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f',
        ];
        let mut result = String::new();

        while num > 0 {
            let res = num % 16;
            let hex_num = hex[res as usize];
            result = format!("{hex_num}{result}");
            num = num / 16;
        }

        result
    }
}
