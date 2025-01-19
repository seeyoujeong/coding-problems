use std::io::stdin;

fn main() {
    let mut buf = String::new();
    stdin().read_line(&mut buf).unwrap();

    let n: usize = buf.trim().parse().unwrap();

    let mut dp = vec![0; n + 1];

    for i in 2..=n {
        if i % 3 == 0 && i % 2 == 0 {
            dp[i] = (dp[i - 1]).min(dp[i / 3]).min(dp[i / 2]);
        } else if i % 3 == 0 {
            dp[i] = (dp[i - 1]).min(dp[i / 3]);
        } else if i % 2 == 0 {
            dp[i] = (dp[i - 1]).min(dp[i / 2]);
        } else {
            dp[i] = dp[i - 1];
        }

        dp[i] += 1;
    }

    print!("{}", dp[n]);
}
