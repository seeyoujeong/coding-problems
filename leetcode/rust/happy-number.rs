impl Solution {
    pub fn is_happy(n: i32) -> bool {
        use std::collections::HashSet;

        let mut n = n;
        let mut set = HashSet::from([n]);

        while n != 1 {
            n = n.to_string().chars().fold(0, |acc, cur| {
                let num = cur.to_digit(10).unwrap() as i32;
                acc + num * num
            });

            if set.contains(&n) {
                return false;
            } else {
                set.insert(n);
            }
        }

        true
    }
}
