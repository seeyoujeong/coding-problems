impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        use std::collections::HashMap;

        let roman_values: HashMap<char, i32> = HashMap::from([
            ('I', 1),
            ('V', 5),
            ('X', 10),
            ('L', 50),
            ('C', 100),
            ('D', 500),
            ('M', 1000),
        ]);

        let mut total = 0;
        let chars: Vec<char> = s.chars().collect();

        for i in 0..chars.len() {
            let current = roman_values.get(&chars[i]).unwrap();
            let next = if i + 1 < chars.len() {
                roman_values.get(&chars[i + 1]).unwrap()
            } else {
                &0
            };

            if next > current {
                total -= current;
            } else {
                total += current;
            }
        }

        total
    }
}
