impl Solution1 {
    pub fn common_factors(a: i32, b: i32) -> i32 {
        fn gcd(mut x: i32, mut y: i32) -> i32 {
            while y != 0 {
                let temp = y;
                y = x % y;
                x = temp;
            }

            x
        }

        let g = gcd(a, b);
        let mut result = 1;

        for i in 2..=g {
            if a % i == 0 && b % i == 0 {
                result += 1;
            }
        }

        result
    }
}

impl Solution2 {
    pub fn common_factors(a: i32, b: i32) -> i32 {
        let mut result = 0;
        let min = a.min(b);

        for i in 1..=min {
            if a % i == 0 && b % i == 0 {
                result += 1;
            }
        }

        result
    }
}
