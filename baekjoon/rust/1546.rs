use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace().flat_map(str::parse::<u32>);

    let n = inputs.next().unwrap() as f32;
    let scores: Vec<_> = inputs.collect();
    let max = scores.iter().max().unwrap();

    let sum: f32 = scores
        .iter()
        .map(|&num| (num as f32) / (*max as f32) * 100.0)
        .sum();

    print!("{}", sum / n);
}
