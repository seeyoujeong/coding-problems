use std::io::{stdin, stdout, BufWriter, Write};

fn main() {
    let mut lines = stdin().lines();
    let line = lines.next().unwrap().unwrap();
    let mut line = line.split_whitespace().flat_map(str::parse::<u16>);
    let n = line.next().unwrap();

    let mut result: Vec<u16> = (1..=n).collect();

    while let Some(Ok(line)) = lines.next() {
        let mut nums = line.split_whitespace().flat_map(str::parse::<usize>);
        let i = nums.next().unwrap() - 1;
        let j = nums.next().unwrap() - 1;

        result[i..=j].reverse();
    }

    let mut output = BufWriter::new(stdout());

    for num in result {
        write!(output, "{} ", num).unwrap();
    }
}
