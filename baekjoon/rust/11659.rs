use std::io::{stdin, stdout, BufWriter, Write};

fn main() {
    let mut lines = stdin().lines().skip(1);

    let nums: Vec<u32> = lines
        .next()
        .unwrap()
        .unwrap()
        .split_whitespace()
        .flat_map(str::parse)
        .collect();

    let mut prefix_sum = vec![0];

    for i in 0..nums.len() {
        prefix_sum.push(prefix_sum[i] + nums[i]);
    }

    let mut output = BufWriter::new(stdout());

    while let Some(Ok(line)) = lines.next() {
        let mut range = line.split_whitespace().flat_map(str::parse::<usize>);
        let i = range.next().unwrap();
        let j = range.next().unwrap();

        writeln!(output, "{}", prefix_sum[j] - prefix_sum[i - 1]).unwrap();
    }
}
