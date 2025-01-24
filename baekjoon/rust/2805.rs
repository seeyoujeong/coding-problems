use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    let mut lines = stdin.lock().lines();

    let line = lines.next().unwrap().unwrap();
    let mut line = line.split_whitespace().skip(1).flat_map(str::parse::<u64>);
    let m = line.next().unwrap();

    let trees = lines
        .next()
        .unwrap()
        .unwrap()
        .split_whitespace()
        .flat_map(str::parse::<u64>)
        .collect::<Vec<_>>();

    let mut start = 0;
    let mut end = *trees.iter().max().unwrap();

    while start + 1 < end {
        let mid = (start + end) / 2;
        let sum: u64 = trees.iter().map(|&tree| (tree.saturating_sub(mid))).sum();

        if sum >= m {
            start = mid;
        } else {
            end = mid;
        }
    }

    println!("{}", start);
}
