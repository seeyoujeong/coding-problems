impl Solution1 {
    pub fn climb_stairs(n: i32) -> i32 {
        let n = n as usize;
        let mut cache = vec![1; n + 1];

        for i in 2..=n {
            cache[i] = cache[i - 1] + cache[i - 2];
        }

        cache[n]
    }
}

impl Solution2 {
    pub fn climb_stairs(n: i32) -> i32 {
        let mut a = 0;
        let mut b = 1;
        let mut result = 0;

        for i in 1..=n {
            result = a + b;
            a = b;
            b = result;
        }

        result
    }
}

impl Solution3 {
    pub fn climb_stairs(n: i32) -> i32 {
        fn climbing(n: usize, dp: &mut Vec<i32>) -> i32 {
            if n <= 1 {
                return 1;
            }

            if dp[n] != 0 {
                return dp[n];
            }

            dp[n] = climbing(n - 1, dp) + climbing(n - 2, dp);
            dp[n]
        }

        let n = n as usize;
        let mut dp = vec![0; n + 1];

        climbing(n, &mut dp)
    }
}
