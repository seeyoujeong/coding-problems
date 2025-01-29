use std::collections::HashMap;
use std::io::{stdin, stdout, BufWriter, Write};

fn main() {
    let mut lines = stdin().lines();
    let first_line = lines.next().unwrap().unwrap();
    let mut nums = first_line
        .split_whitespace()
        .map(|s| s.parse::<usize>().unwrap());

    let n = nums.next().unwrap();
    let m = nums.next().unwrap();

    let mut site_map = HashMap::new();

    for _ in 0..n {
        if let Some(Ok(line)) = lines.next() {
            let mut parts = line.split_whitespace();
            let site = parts.next().unwrap().to_string();
            let pw = parts.next().unwrap().to_string();

            site_map.insert(site, pw);
        }
    }

    let mut output = BufWriter::new(stdout());

    for _ in 0..m {
        if let Some(Ok(site)) = lines.next() {
            writeln!(output, "{}", site_map.get(&site).unwrap()).unwrap();
        }
    }
}
