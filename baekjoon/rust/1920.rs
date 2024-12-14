use std::fmt::Write;
use std::{collections::HashSet, io::stdin};

fn main() {
    let mut lines = stdin().lines().skip(1);

    let n_nums: HashSet<_> = lines
        .next()
        .unwrap()
        .unwrap()
        .split_whitespace()
        .flat_map(str::parse::<i64>)
        .collect();

    let mut result = String::new();

    if let Some(Ok(line)) = lines.skip(1).next() {
        let m_nums = line.split_whitespace().flat_map(str::parse::<i64>);

        for num in m_nums {
            let n = if n_nums.contains(&num) { 1 } else { 0 };

            write!(result, "{}\n", n).unwrap();
        }
    }

    print!("{}", result);
}
