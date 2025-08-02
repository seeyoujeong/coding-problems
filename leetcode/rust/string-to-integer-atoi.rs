impl Solution1 {
    pub fn my_atoi(s: String) -> i32 {
        let s_trim: Vec<_> = s.trim_start().chars().collect();
        let mut sign = 1;
        let mut idx = 0;
        let mut result = 0;

        if s_trim.len() == 0 {
            return 0;
        }

        match s_trim[idx] {
            '-' => {
                sign = -1;
                idx += 1;
            }
            '+' => {
                idx += 1;
            }
            _ => {}
        }

        while idx < s_trim.len() && s_trim[idx] >= '0' && s_trim[idx] <= '9' {
            result = result * 10 + s_trim[idx].to_digit(10).unwrap() as u64;

            if sign == -1 && result > 2_u64.pow(31) {
                return i32::MIN;
            } else if sign == 1 && result > 2_u64.pow(31) - 1 {
                return i32::MAX;
            }

            idx += 1;
        }

        sign * result as i32
    }
}

impl Solution2 {
    pub fn my_atoi(s: String) -> i32 {
        use std::num::{IntErrorKind::*, ParseIntError};

        let mut reach_num = false;
        let res = s
            .trim()
            .chars()
            .take_while(|&c| {
                if c.is_digit(10) {
                    reach_num = true;
                    true
                } else {
                    let res = !reach_num && (c == '-' || c == '+');
                    reach_num = true;
                    res
                }
            })
            .collect::<String>();
        let res = res.strip_prefix('+').unwrap_or(&res);

        let res = res
            .parse()
            .unwrap_or_else(|e: ParseIntError| match e.kind() {
                PosOverflow => i32::MAX,
                NegOverflow => i32::MIN,
                _ => 0,
            });

        res
    }
}
