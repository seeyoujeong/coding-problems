impl Solution {
    pub fn int_to_roman(mut num: i32) -> String {
        let roman_map = [
            (1000, "M"),
            (900, "CM"),
            (500, "D"),
            (400, "CD"),
            (100, "C"),
            (90, "XC"),
            (50, "L"),
            (40, "XL"),
            (10, "X"),
            (9, "IX"),
            (5, "V"),
            (4, "IV"),
            (1, "I"),
        ];

        let mut result = String::new();

        for i in 0..roman_map.len() {
            let (val, roman) = roman_map[i];

            while num >= val {
                num -= val;
                result.push_str(roman);
            }
        }

        result
    }
}
