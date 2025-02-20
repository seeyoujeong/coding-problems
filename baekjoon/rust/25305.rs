use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();

    let mut inputs = buf.split_whitespace().flat_map(str::parse::<usize>).skip(1);
    let k = inputs.next().unwrap();
    let mut scores: Vec<usize> = inputs.collect();

    scores.sort_unstable_by(|a, b| b.cmp(a));

    let result = scores[k - 1];

    print!("{}", result);
}
