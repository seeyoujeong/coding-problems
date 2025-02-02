use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();

    let mut inputs = buf.split_whitespace().flat_map(str::parse::<usize>);
    let m = inputs.next().unwrap();
    let n = inputs.next().unwrap();

    let primes: Vec<usize> = (m..=n)
        .filter(|&num| {
            if num < 2 {
                false
            } else {
                for i in 2..=((num as f64).sqrt().floor() as usize) {
                    if num % i == 0 {
                        return false;
                    }
                }

                true
            }
        })
        .collect();

    if primes.is_empty() {
        print!("-1");
    } else {
        println!("{}", primes.iter().sum::<usize>());
        print!("{}", primes.first().unwrap());
    }
}
