use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.trim().split("\n").map(|input| {
        input
            .split_whitespace()
            .map(|v| v.parse::<i32>().unwrap())
            .collect::<Vec<i32>>()
    });

    let n_x = inputs.next().unwrap();

    let result = inputs
        .next()
        .unwrap()
        .iter()
        .filter_map(|&num| {
            if num < n_x[1] {
                Some(num.to_string())
            } else {
                None
            }
        })
        .collect::<Vec<String>>();

    print!("{}", result.join(" "));
}

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.split_whitespace().map(|v| v.parse::<i32>().unwrap());

    inputs.next().unwrap();
    let x = inputs.next().unwrap();

    let result = inputs
        .filter_map(|num| if num < x { Some(num.to_string()) } else { None })
        .collect::<Vec<String>>();

    print!("{}", result.join(" "));
}
