use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.trim().lines();

    inputs.next().unwrap();

    let nums: Vec<i32> = inputs
        .next()
        .unwrap()
        .split_whitespace()
        .map(|v| v.parse().unwrap())
        .collect();

    let min_num = nums.iter().min().unwrap();
    let max_num = nums.iter().max().unwrap();

    print!("{} {}", *min_num, *max_num);
}

fn main() {
    let buf = read_to_string(stdin()).unwrap();

    const N: i32 = 1_000_000;
    let (mut min, mut max) = (N, -N);

    buf.split_whitespace()
        .skip(1)
        .map(|s| s.parse::<i32>().unwrap())
        .for_each(|num| {
            min = num.min(min);
            max = num.max(max);
        });

    println!("{min} {max}");
}
