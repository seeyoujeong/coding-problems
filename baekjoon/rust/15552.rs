use std::io::{read_to_string, stdin};

fn main() {
    let buf = read_to_string(stdin()).unwrap();
    let mut inputs = buf.trim().split("\n");

    let t = inputs.next().unwrap().parse::<usize>().unwrap();
    let mut result = Vec::new();

    for _ in 0..t {
        let input = inputs.next().unwrap();
        let nums: Vec<i32> = input
            .split_whitespace()
            .map(|v| v.parse().unwrap())
            .collect();
        let (a, b) = (nums[0], nums[1]);

        result.push(format!("{}", a + b));
    }

    print!("{}", result.join("\n"));
}

use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    let mut stdin = stdin.lock();

    let mut line = String::new();

    stdin.read_line(&mut line).unwrap();
    let t: usize = line.trim().parse().unwrap();

    let mut result = Vec::with_capacity(t);

    for _ in 0..t {
        line.clear();
        stdin.read_line(&mut line).unwrap();

        let mut nums = line.split_whitespace();

        let a: i32 = nums.next().unwrap().parse().unwrap();
        let b: i32 = nums.next().unwrap().parse().unwrap();

        result.push(format!("{}", a + b));
    }

    print!("{}", result.join("\n"));
}
