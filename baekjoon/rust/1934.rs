use std::io::{stdin, stdout, BufWriter, Write};

fn main() {
    let mut lines = stdin().lines().skip(1);

    let mut output = BufWriter::new(stdout());

    while let Some(Ok(line)) = lines.next() {
        let nums: Vec<i32> = line
            .split_whitespace()
            .flat_map(str::parse::<i32>)
            .collect();
        let (a, b) = (nums[0], nums[1]);

        let lcm = a * b / calc_gcd(a, b);

        writeln!(output, "{}", lcm).unwrap();
    }
}

fn calc_gcd(mut a: i32, mut b: i32) -> i32 {
    while b != 0 {
        let r = a % b;
        a = b;
        b = r;
    }

    a
}
